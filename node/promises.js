// const myPromise = new Promise((resolve, reject) => {
//   if (1 + 1 === 2) {
//     setTimeout(() => {
//       resolve("Sucesso!");
//     }, 1000);
//   } else {
//     reject("Falhou!");
//   }
// });

const iniciar = (senha) => {
  return new Promise((resolve, reject) => {
    console.log("Iniciando banco de dados");
    if (senha === "12345") {
      resolve("O banco de dados foi iniciado");
    } else {
      reject("Senha incorreta!");
    }
  });
};

const preparar = () => {
  return new Promise((resolve, reject) => {
    console.log("Preparando banco de dados..."); //vai iniciar banco de dados entao vou para proxima linha
    resolve("Banco de dados preparado com sucesso!");
  });
};

const bancoDeDados = async () => {
  try {
    const mensagemDeInicio = await iniciar("123455");
    console.log(mensagemDeInicio);

    const msgFinal = await preparar();
    console.log(msgFinal);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Sempre eh executado!");
  }
};

bancoDeDados();
