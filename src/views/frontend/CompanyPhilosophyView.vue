<template>
  <div class="container my-5">
    <h2 class="text-center fw-bold mb-5" data-aos="fade-up">公司理念</h2>

    <div class="row gy-5">
      <div
        class="col-12"
        v-for="(section, index) in sections"
        :key="index"
      >
        <div
          class="p-4 border-start border-4 border-primary shadow-sm bg-light rounded-3"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-duration="800"
        >
          <h5 class="fw-bold mb-3">{{ section.title }}</h5>
          <p class="mb-0" v-html="section.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const sections = [
  {
    title: '品牌誕生之前',
    content: `2014年，我們的故事，從一間專注於3C配件代工的工廠開始。<br>
              一開始，我們默默為世界各地的品牌提供穩定的 OEM 服務，其中最深入合作的，是日本。<br><br>
              <strong>嚴格的品質標準、謹慎的市場節奏，讓我們更懂什麼叫「安心感」。</strong>`
  },
  {
    title: '專注外銷的十年',
    content: `2014 - 2024 年<br>
              我們以日本市場為核心，逐步拓展 3C 配件的產品線，<br>
              從充電線、耳機、行動電源、無線充電器到防災商品，每一樣產品的誕生，都是一場對細節的堅持。<br><br>
              <strong>我們不是最快的，但我們始終是最穩定、最值得信賴的那一個。</strong>`
  },
  {
    title: '品牌誕生的那一年',
    content: `2025年，MUMU 在台灣誕生。<br>
              在代工十年的今天，我們回頭看台灣的市場，<br>
              我們心裡有一個願望： <strong>「把日本市場也信任的好產品，帶回台灣。」</strong><br><br>
              於是，MUMU 不只是一個品牌，<br>
              它是我們希望與台灣一起成長的起點。`
  },
  {
    title: '給實體店家的溫柔提案',
    content: `我們深知 3C 產品的變化快速，<br>
              也知道店家經營的不容易：庫存壓力、銷售風險、消費者喜好捉摸不定……<br><br>
              所以我們提出了 <strong>「寄售合作」的方式，讓您先試賣、後決定，沒有壓力地將好產品引進店內。</strong><br><br>
              我們相信，讓每一位老闆都能放心賣、安心賺，才是健康的市場生態。`
  },
  {
    title: '來自日本的選品眼光',
    content: `有些商品，不一定是 MUMU 自訂款，<br>
              但只要是我們在日本合作過、銷售穩定、安全合格的產品，<br>
              我們也會精挑細選，帶回台灣。<br><br>
              MUMU 不只做產品，我們也幫您挑選更值得信任的商品。<br><br>
              <strong>我們不是平台，我們是懂「品質」的同行人。</strong>`
  },
  {
    title: 'MUMU 想做的事',
    content: `我們想打造一個台灣本地的 3C 配件品牌，<br>
              不只是為了銷售，更是為了讓品質回到市場的核心。<br><br>
              讓實體通路有更多選擇，讓消費者用得安心，讓每個願意一起努力的你，能夠輕鬆開啟生意的可能性。<br><br>
              MUMU，從工廠走向品牌，從日本走向台灣。<br>
              我們正在改變，也邀請你一起加入。`
  }
]
</script>

<style scoped>
h2 {
  font-size: 2.5rem;
  color: #333;
}
p {
  font-size: 1.05rem;
  line-height: 1.8;
}
h5{
  color: #264f42;
}
</style>
