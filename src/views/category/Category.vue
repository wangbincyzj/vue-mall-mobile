<template>
  <div class="wrapper">
    <div id="category">
      <button @click="btnClick">click</button>

      <div>分类列表86</div>
      <div>分类列表87</div>
      <div>分类列表88</div>
      <div>分类列表89</div>
      <div>分类列表90</div>
      <div>分类列表91</div>

      <div>分类列表108</div>
      <div>分类列表109</div>
      <div>分类列表110</div>
      <div>分类列表111</div>
      <div>分类列表112</div>
      <div>分类列表113</div>
      <div>分类列表114</div>
      <div>分类列表115</div>
      <div>分类列表116</div>
      <div>分类列表117</div>
      <div>分类列表118</div>
      <div>分类列表119</div>
      <div>分类列表120</div>
      <div>分类列表121</div>
      <div>分类列表122</div>
      <div>分类列表123</div>
      <div>分类列表124</div>
      <div>分类列表125</div>
      <div>分类列表126</div>
      <div>分类列表127</div>
      <div>分类列表128</div>
      <div>分类列表129</div>
      <div>分类列表130</div>
      <div>分类列表131</div>
      <div>分类列表132</div>
      <div>分类列表133</div>
      <div>分类列表134</div>
      <div>分类列表135</div>
      <div>分类列表136</div>
      <div>分类列表137</div>
      <div>分类列表138</div>
      <div>分类列表139</div>
      <div>分类列表140</div>
      <div>分类列表141</div>
      <div>分类列表142</div>
      <div>分类列表143</div>
      <div>分类列表144</div>
      <div>分类列表145</div>
      <div>分类列表146</div>
      <div>分类列表147</div>
      <div>分类列表148</div>
      <div>分类列表149</div>
      <div>分类列表150</div>
      <div>分类列表151</div>
      <div>分类列表152</div>
      <div>分类列表153</div>
      <div>分类列表154</div>
      <div>分类列表155</div>
      <div>分类列表156</div>
      <div>分类列表157</div>
      <div>分类列表158</div>
      <div>分类列表159</div>
      <div>分类列表160</div>
      <div>分类列表161</div>
      <div>分类列表162</div>
      <div>分类列表163</div>
      <div>分类列表164</div>
      <div>分类列表165</div>
      <div>分类列表166</div>
      <div>分类列表167</div>
      <div>分类列表168</div>
      <div>分类列表169</div>
      <div>分类列表170</div>
      <div>分类列表171</div>
      <div>分类列表172</div>
      <div>分类列表173</div>
      <div>分类列表174</div>
      <div>分类列表175</div>
      <div>分类列表176</div>
      <div>分类列表177</div>
      <div>分类列表178</div>
      <div>分类列表179</div>
      <div>分类列表180</div>
      <div>分类列表181</div>
      <div>分类列表182</div>
      <div>分类列表183</div>
      <div>分类列表184</div>
      <div>分类列表185</div>
      <div>分类列表186</div>
      <div>分类列表187</div>
      <div>分类列表188</div>
      <div>分类列表189</div>
      <div>分类列表190</div>
      <div>分类列表191</div>
      <div>分类列表192</div>
      <div>分类列表193</div>
      <div>分类列表194</div>
      <div>分类列表195</div>
      <div>分类列表196</div>
      <div>分类列表197</div>
      <div>分类列表198</div>
      <div>分类列表199</div>
      <div>分类列表200</div>
    </div>
  </div>

</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Category",
    created() {
      this.$nextTick().then(ret=>{
        console.log(ret);
        let bs = new BScroll(document.querySelector(".wrapper"), {
          probeType: 2,
          click: true,
          pullUpLoad: true

        })
        bs.on("scroll", (p)=>{
          // console.log(p)
        })
        bs.on("pullingUp", ()=>{
          console.log("上啦加载更多")
        })
      })
    },
    methods:{
      btnClick(e){
        console.log(e)
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper{
    color: white;
    height: 300px;
    background: red;
    overflow-y: hidden;
  }
</style>
