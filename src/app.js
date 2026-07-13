// Simple starter application

const APP_PORT = process.env.PORT || 3000;

function main() {
  const message = "application started successfully";

  console.log(message);
  console.log(`listening on port ${APP_PORT}`);
}

main();
