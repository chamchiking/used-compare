import cheerio  from 'cheerio';
import axios from "axios";


const crawl = async (ctx) => {
    const keyword = "갤럭시";
    // axios 를 활용해서 AJAX로 HTML 문서를 가져온다.
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] =  ["DELETE", "POST", "GET", "OPTIONS"];
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = ["Content-Type", "Authorization", "X-Requested-With"];
    const getHTML = () => {
      try {
        return axios.get(`https://naver.com`, {
            headers: { 
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': '*' 
            },
        });
        // return axios.get(`https://m.bunjang.co.kr/search/products?q=${keyword}`);
      } catch (e) {
        console.error(e);
      }
    };
  
    let result = [];
  
    // getHTML 함수 실행 후 데이터에서 div.se-section-documentTitle 인 리스트를 postList에 저장
    await getHTML()
      .then((html) => {
        console.log("크롤링 html")
        console.log(html);
        const $ = cheerio.load(html.data);
        const $postList = $('div.sc-fcdeBU');
  
        $postList.each(function (i, el) {
          result[i] = {
            data: $(this).find('div.iVCsji').text(),
            // category: $(this).children('div.blog2_series').find('a').text(),
            // title: $(this).children('div.pcol1').find('span').text(),
            // author: $(this).children('div.blog2_container').find('a').text(),
            // hits: 0
          };
        });
        console.log(result);
        return result;
      })
      .then((res) => {
        console.log(result);
      });
  
    ctx.body = result;
  };

  export default crawl;