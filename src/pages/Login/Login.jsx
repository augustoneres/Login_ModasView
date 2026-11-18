import { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button/Button';
import BrandLogo from '../../components/BrandLogo/BrandLogo';
import Input from '../../components/Input/Input';
import { credentials } from '../../config/credentials';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import styles from './Login.styles';

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroUsuario, setErroUsuario] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroGeral, setErroGeral] = useState('');

  const usuarioRef = useRef(null);
  const senhaRef = useRef(null);

  function limparErros() {
    setErroUsuario('');
    setErroSenha('');
    setErroGeral('');
  }

  // Confere os campos obrigatórios e depois as credenciais definidas no código.
  function entrar() {
    const usuarioDigitado = usuario.trim();
    limparErros();

    if (usuarioDigitado === '') {
      setErroUsuario('Informe o usuário.');
      usuarioRef.current?.focus();
      return;
    }

    if (senha.trim() === '') {
      setErroSenha('Informe a senha.');
      senhaRef.current?.focus();
      return;
    }

    if (usuarioDigitado !== credentials.usuario || senha !== credentials.senha) {
      setErroGeral('Usuário ou senha inválidos.');
      return;
    }

    signIn();
    router.replace('/home');
  }

  function limparCampos() {
    setUsuario('');
    setSenha('');
    limparErros();
    usuarioRef.current?.focus();
  }

  return (
    <KeyboardAvoidingView
      style={globalStyles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.cartao}>
          <View style={styles.marca}>
            <BrandLogo />
          </View>

          <View style={styles.cabecalho}>
            <Text style={styles.tituloTela} accessibilityRole="header">
              Bem-vindo de volta
            </Text>
            <Text style={styles.descricaoApp}>
              Organize suas peças e descubra combinações para o seu próximo look.
            </Text>
          </View>

          <View style={styles.campos}>
            <Input
              label="Usuário"
              icon="person-outline"
              placeholder="Digite seu usuário"
              value={usuario}
              onChangeText={setUsuario}
              error={erroUsuario}
              preenchido={usuario.trim() !== ''}
              inputRef={usuarioRef}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => senhaRef.current?.focus()}
            />

            <Input
              label="Senha"
              icon="key-outline"
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              error={erroSenha}
              preenchido={senha !== ''}
              inputRef={senhaRef}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={entrar}
            />
          </View>

          {erroGeral ? (
            <View style={styles.caixaErro} accessibilityLiveRegion="polite">
              <Ionicons name="alert-circle-outline" size={20} color={colors.error} />
              <Text style={styles.textoErro}>{erroGeral}</Text>
            </View>
          ) : null}

          <View style={styles.botoes}>
            <Button title="Entrar" onPress={entrar} />
            <Button title="Limpar campos" variant="outline" onPress={limparCampos} />
          </View>

          <View style={styles.divisorLinha}>
            <View style={styles.linha} />
            <Text style={styles.divisorTexto}>Login de demonstração</Text>
            <View style={styles.linha} />
          </View>

          <View style={styles.rodape}>
            <Ionicons name="information-circle-outline" size={18} color={colors.textMuted} />
            <Text style={styles.textoRodape}>
              Peças adicionadas ficam disponíveis somente enquanto o app estiver aberto.
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
