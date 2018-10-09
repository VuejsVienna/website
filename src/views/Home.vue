<template>
  <div class="home">
    <b-row>
      <b-col class="left">
        <b-container>
            <div class="text">
              <h1>Create, learn &amp; meet new <span>Vue.js</span> enthusiasts in Vienna</h1>
              <p>
                This is a group for anyone interested in "Vue.js - The Progressive JavaScript Framework".
                The goal is to provide monthly meetups where people give talks on Vue.js and related topics, and people can get together with other developers in the community.
              </p>
              <div class="next-meetup">
                <h3>Next meetup:</h3>
                <ul>
                  <li>Friday, November 30, 2018</li>
                  <li>|</li>
                  <li>Certible, Löwelstraße 20</li>
                </ul>
              </div>
              <b-button href="https://www.meetup.com/Vue-js-Vienna/">Join us!</b-button>
            </div>
        </b-container>
      </b-col>
      <b-col class="right">
        <b-container>
          <div class="logo">
            <img alt="Vue logo" src="../assets/vue-js-vienna-logo.png">
          </div>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="scss">
  .left {
    height: 100vh;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      align-self: center;
      padding: 50px;
      text-align: left;
      h1 {
        color: #35495e;
        font-weight: 300;
        font-size: 3.7rem;
        line-height: 1.4em;
        span {
          color: #42b883;
          font-weight: bold;
        }
      }
      p {
        line-height: 1.9em;
        font-size: 1rem;
      }
      .btn {
        display: block;
        width: 150px;
        background: #35495e;
        border: none;
        padding: 10px 20px;
        border-radius: 30px;
        letter-spacing: 3px;
        font-size: 0.9rem;
        font-weight: 700!important;
        text-transform: uppercase!important;
        &:hover {
          background: #42b883;
        }
      }
      .next-meetup {
        line-height: 1.8em;
        ul {
          list-style-type: none;
          padding: 0;
          li {
            display: inline-block;
            margin-right: 20px;
          }
        }
      }
    }
  }
  .right {
    height: 100vh;
    background: url('../assets/hero-bg.jpg') no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      // max-width: 500px;
    }
  }
  @media (max-width: 576px) {
    .right {
      display: none;
    }
  }
</style>
