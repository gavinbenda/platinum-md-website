<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

body {
  background-image: linear-gradient(180deg, #0095A2 0%, #D8D8D8 100%);
  color: #393D46;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 45px;
  color: #ffffff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 25px;
  color: #ffffff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.download-button {
  margin-top: 25px;
  background-image: linear-gradient(180deg, #49F192 0%, #219F8A 100%);
  border-radius: 18px;
  color: #ffffff;
  padding: 20px 80px;
  font-weight: bold;
  transition: all 0.5s ease;
  text-decoration: none;
}

.download-button:hover {
  background-image: linear-gradient(180deg, #3EBC74 0%, #0C7B8F 100%);
  text-decoration: none;
}

.download-button > span {
  vertical-align: middle;
  margin-left: 1rem;
}

.button-icon {
  font-size: 2.5rem;
  vertical-align: middle;
}

.other-platforms h3 {
  font-size: 1rem;
  margin-top: 2rem;
}

</style>
