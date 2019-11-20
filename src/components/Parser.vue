<template>
  <div>
    <h1>gtr</h1>
    <div class="information">
      <span>{{info}}</span>
      <span>{{cururl}}</span>
      <span>{{url}}</span>
    </div>
  </div>
</template>

<script>
const needle = require("needle");
const cheerio = require("cheerio");

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },

  data() {
    let cururl, info, $;
    cururl = this.url;
    needle.get(
      cururl,
      {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:8080"
          //CORS
        }
      },
      function(err, res) {
        if (err) throw err;
        $ = cheerio.load(res.body);
        info = $(".name").text();
      }
    );
    return {
      info,
      cururl
    };
  }

  // mounted() {
  // }
};
</script>

<style>
</style>