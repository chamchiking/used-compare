import phantom from "phantom";
import cheerio from "cheerio";

const url = 'https://m.bunjang.co.kr/search/products?q=갤럭시';


async function loadJsSite(url){
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });

  const status = await page.open(url);
  const content = await page.property('content');
  // console.log(content);
  // let $ = cheerio.load(content);

  await instance.exit();

  return {$: cheerio.load(content), content: content};
} 

const crawl = async function(){
    const {$, content} = await loadJsSite(url);
    // I can query like this
    // get the body

    console.log($('body').html());
    console.log("");
    console.log(content);
}

export default crawl;