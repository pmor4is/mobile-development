# Mobile development
<div align='center'>

</div>

## Criando um projeto
Para criar e iniciar um projeto através do emulador, seguir as linhas abaixo no terminal
~~~bash
npx react-native@latest init <nome_do_projeto>
cd <diretorio_do_projeto>
npm install
npm start
~~~
Para verificar quais emuladores estão disponíveis e inicializar:
~~~bash
# Androids
emulator -list-avds
emulator -avd <nome_do_emulador>
# Lista qualquer dispositivo para deploy
adb devices
~~~

Para criar um projeto com Expo, para visualização no próprio dispositivo móvel, seguir as linhas abaixo:
~~~bash
npx create-expo-app --template
cd <diretorio_do_projeto>
npx expo start --clear
~~~