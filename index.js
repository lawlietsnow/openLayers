import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Draw from 'ol/interaction/Draw';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Snap from 'ol/interaction/Snap';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

import Icon from 'ol/style/Icon';
import ImageStatic from 'ol/source/ImageStatic';
import ImageLayer from 'ol/layer/Image';
import GeoJSON from 'ol/format/GeoJSON';

import Circle from 'ol/geom/Circle';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
 
import * as olProj from 'ol/proj';
import * as olSize from 'ol/size';





const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
      style: new Style({
        stroke:new Stroke({
          color: '#ffcc33',
          width: 2
        }),
        fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)'
    }),
      })
    })
  ],
  view: new View({
    center: olProj.fromLonLat([-74.006,40.7127]),
    zoom: 0
  })
});

var draw = new Draw({
  type:'Circle',
  source: new VectorSource()
});
map.addInteraction(draw);


//[-74.006,40.7127]

var marker = new Feature({
  geometry: new Point(
    olProj.fromLonLat([-74.006,40.7127])
  ),  
});
var urlImg='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBIQEBIQDQ8NEA8PDQ0PEA8NEBAQFhIXGBYXFxUYHSggGBwmGxUVIT0iJikrLzQvFx8zOzUsOCgtLisBCgoKDg0OGxAQGi0gICAtLS83Ny8tLS0rKystLS01LSsrLTUtLS0rLSstLS0tKystLSsuLS4vLS0tLS0tLS0tN//AABEIAJkAmQMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABAMFAQIHBgj/xABBEAACAgEBAwcHCQUJAAAAAAABAgADBBEFBiESEzFBUWFxBzJSgZGhsRQiI0JicoKSwUOissLDJDNUY3N0k7PR/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAMBAgQFBgf/xAA0EQADAAEDAQUFBwMFAAAAAAAAAQIDBBESBRMhMUGxIlGRoeEGMkJhcYHRUsHwFCQzU3L/2gAMAwEAAhEDEQA/AO4wAIAEACABACLIyEqXlWMtaj6zEKJW7mFvT2RTJkjHPK2kvzPP52+NKaipWuI+t/dp7Tx905OfrWCO6Fy+SOJqPtDp8fdjTt/Bf5+xSZO9uW/mmukfZTlH2tqPdOZk63nr7qS+Zx8v2i1NfcSn5+v8FbdtjLfpyLR91ub/AIdJlrqWprxt+hirq2rrxyP09Bds3J/xGR/zW/8Asp/rs/8AW/iyi6jqf+yvizA2vmJ0ZF34nL/xax0dQzr8bHx1XUr8b9RqjfPPr85q7x2WVgH2ppNuPq2ZeOzOhi65nX3tn+38F1s/yi0nQZFT0nrdDzqeJHAj1Azo4uqY6+8tvmdbB1rFfda2+Z6zZ+0qMleXRYlq9fJIJHiOkeudGMk2t5e51seWMi3h7jcuXCABAAgAQAIAEACABADBOnE8AOkwA8xtrexU1TH0sYcDaeKDw9L4eM4ms6xGP2cXtP3+X1PO6/r+PFvGD2n7/Jfz6HkMvLsublWM1jdpPAeA6B6p5zNnyZq5ZHueT1Gqy565ZKbIYozhAAgAQAwRAnchsql1QyaErqY6aNEWKI1lLiyp3qdeh0Yqfd1TXizVD3l7G7BqKh7y9j2e7nlHIIqzx3DKRdPzoPiPZ1zuafqCruyfE9HpOqKvZyfE6NRctih0ZXRwCrqQysO0EdM6Se/ejrpprdG8kkIAEACABAAgBHfctal3IVVGrMegCVqlK3b2SK3cxLqnskeC3g3hfIJRNUpB6Ohn727u6eV6h1OszcY+6fX6fkeJ6p1mtQ3jxd0fN/T8viUc5BwQgAQAIAEACABADBgSQWpLyxksSurj5ZpiityaZpijXjse3X3rv2Y+g1txmP0mOT0drJ6Le4+8dTS6px3PwO1otbWPufejtWydp05dS30OLK36COBB6wR1Edk7U0qW6PQxatbocliwQAIAEAME6cTwA6TADn+8+3DkPyEJFKHh1ctvSPd2TyfU+oPNXZw/ZXz+nuPD9Z6o9RXZY37C+b/j3fEo5yDghAAgAQAIAEACABAAgBo4koshS5Y2WPliF6x8s0wytya5qijbjoc3Q3os2Xkcri+NaQMikdnpqPSHv6PDqaXO4ez8Ds6LUuHs/A73i5KXIttbB67FDo68Qykagzrp7ndT370SySQgAQA8vvntbkL8nQ6NYNbSOpOz1/DxnE6xrOzjsp8a8f0+p53r+v7LH2EPvrx/JfX0PFTy54sIAEACABAkIAEACBAQAIAYaBKFbRGSOkSuEfJogr8hZohmuGVWWk142bsVHuvI9vSa7Ds65vmWcp8Mk+a/S1fgeJHfr2zsaXLv7LO9os264M7BNp0AgBFlXrUjWNwWtSzeAErdqJdV4IpkyTjh3XgluctzcprrHsbzrGJPcOoeoaD1TwefNWbI8leZ801WorPlrJXmyGKM4QAIAECTZUlkiync35qW4F+BqySrRVyaGVKBAgIAYMCRa2MkbIndHSaJEL5ok1QVmSJpg2Y2VVlrVOttZKWVMro46VZTqCPWJuxVsdHDWx9K7rbZXPw6cldBzqDnFH1bBwcfmB9Wk7EVync72O+UplrLFzzW/OZyKVqB0NzfO+4vE+8rOP1rPwwcF+L0RwftDqOz06xrxt/Jf4jw88oeHCABAAgSbIsskWlbj+NRrNWPHubsWLcbOLwmh4e41PB3CORVpMuSNjFljYTYTMzI0ayCoQINWgSha0xsjpE7Y6TRIjdHyaYK7ImiDXjKjME2YzdiZ03yEbXP9owmPRpk1D2JZ/T986emrxR2NJfjJ12ajac/31yOXlleqmtF9Z+d8GE8p1vJyzqfcvU8T9osvLUqP6V69/8ABRTjnnwgAQAIEktMZA2PEt8MidDC0dXA0OWWDSaapbGuqWxU5bTn5WcvPRXvMjMFGsqVCBBpYZKLIVtMbI+UJ2mOkfKEbjHyaYK/IM0QaoKrKmqDdjLjyZZ/yfauMddBa5oYdvOAqP3ip9U3YXtaOjp62tH0jOgdQ5btu3l5eQey1l/L839J4rqVctTb/P0PnnVq5au3+fp3CkwnMCABAAgSboZZMvLG6r9JojJsaoy7Ej5Mu8oys4pbZrM9VuZbvcgJimJYQKmDAkhsaXSGShW1o2UOlCdrR0o0ShK4x0o0QivvM0QaoRV5RmuDbjRDsvI5q+mwcDVdXYD91wf0mmXs0bJezTPrGdM7ByXPb+05H+4v/wCxp4fXf89/q/U+c9RX+5yf+n6mkyHPCABAAgAQJNg0ncsmHKk7hyNSZXcjcIEBAgjdpKRdIXsaMSGyhWxo2UOlCdrR0o0ShK5o+UaIQhe00SjVCKvJaaoRtxoTjh59Y8o9p9s6Z2Tl22hyMzIH+dY35jyv1njuoRtnv9TwPVY21N/r6mgM5xyWZgQEACABAAgSEACBAQA0ZpKRZIgdpdIakLWNGJDZQra0bKHShS1o6UaJQlc0fKNEIr73miUaoRW5DTTCNkIzgUc5bXWOmyxEH4mA/WNS3Y1Ld7H1nOmdk5dv5TzeezdV9ddg8QOQf4PfPNdWx7Zt/ejyHXMW2fl70v4KymycSkedqSYSgszAgIAEACABADGsCTRnkpFkiF3l0hiQu7xiQxIXseMSHShWx42UOlClrx0o0ShG54+UaIkr73miEaokQc6maEaktj0Xk5wflG1MRNNQloubwqBf+UD1xuJb2h2Gd7R9LzoHVPEeVDB1pqyAONLlHP2H6CfBgB+KcvqmLljVe7+5xutYOeJWvL+54Wi2eZqTx9wOJZEuTO5JQ8rsU2NtZBGwawAxyoBsYLydidiNnlki6kiZ5ZIupIHeXSGKSB3jEhqkWseNSGzIrZZGyh8yKW2R0ofMiN1kfKNMSV97zRKNUSLxg06t5CNk8q3IzGHCtRj1H7TEM+neAF/NNOnnvbNmknvdHZZrNwptXBXJosofzbUZdew9R9R0PqlMkK5cvzKZMayQ4fmcOZHpseqwcl6nZHHeDp7J5PPicU5fkeH1GBxTl+Q1XbMrkxVBOtsW5FOTcWSvErxM85DiRxMGyTxJ4mpsk8SykjayWUllJE1kspLqSB7JdSMUkD2RikapFrLI1SOmRW2yNmR0yJ22R0o0TIjfZHzJpiRNjrHJGhLYyiFiFALFiAoHEknoAkkn05uRsIbPwacc6c4F5d5HXa3FvZ5vgonRxzxnY6uKOEpF7LjAgBzbyp7BIIz6h6KZQHsR/gp/D3zmdQ0/Jdov3OP1TScl2k/ueEpyJwqg81eMaS6JciHBKLZXiUcG3OyOJHEwbZPEniam2TxJUkbWSykupImsllJdSQvZLqRikgeyMUjVItZZGqRsyKW2xqkfMid1sdMmiZEnbWPSNCWxrJJOkeRvdU5GR8ttX6DEb6EEcLL+o+C9Pjye+aMEbvkzXpse75PyO5zYbwgAQA0vpWxWRwHR1KupGoZSNCDIa37mQ0mtmcM3z3dfZl+g1bGtJOPYeOn2GPpD3jj26cTVaXg914HndbouzrdeDKmrInPqDl1jJ1vi3Apwbi6RxK8A52HEOBqbZPEngaNbJUllBE1supLqCF7ZdSMUC9lsYpGzAtZbGqR0wKW3RsyPmBR31jkh6WxrJJL3c/dm7aeStNfzUGjX3aarVXrxPeT1Dr9svjh29huLG7eyPpPZOzqsSmvHpXkVUqFQdfeT2knUk9pnQSSWyOpMqVshuSSEACABABPa2zKsul6L15ddg0I6CD1EHqI7ZWpVLZlbhWtmcL3v3WyNl2fO1txnOlOQBw+6/ot8eru5OfSuHuvA4ep0Th7rwKWvJmJ4zn1iJRkSnAW8Ztz8jgR2Zg3yeAcDRrpPAsoI2ul1JdQQPdLqRigXsujFA2YFrLo1SOmCAnWXSGpbGJIF7unutk7Tu5uldEXTnr2B5upe89Z7B1++XjG7fcNx4nb2R9D7sbvUbOoFFA4edZY2nLtfrZj+nVN8SpWyOlEKFsi3li4QAIAEACABACLKxkuRq7VWytxyXRwGVh3gyGtyGt+5nJN7/JZZWWu2cecTiThu3z1/02PnDuPHvMx5dKn3yYM2iT74Oa3O9TGu1WqsQ6OjqUZT2EHiJirFsc6sOwDKlOzFvEZ+UyOAdmanIluBKxkbZEsoLrGRNfLKC6giLky6RdLY1kkmyIWICgsWIAUDUk9gECTo253kpyMgrbm8rEo4EU/t7B3j9mPHj3dc0Rgb76NWPTN99dx2jZezacSpacetaak6EUdfaT0k954zWkktkbplStkNySQgAQAIAEACABAAgAQAqtu7uYeevJyaUt0Gi2ebYvg44jw6JWomvFFLxzXijm+2/IzxLYWRp2VZI/qIP5ZnrTe5mW9J/Szxe0vJ7tXH11xntA6GoK36+pTyvdEvDa8hFae15Hn8nZ19XCym6ojpFlbp8RKOWvIW5a8UKyCoxj4VtnCuuyw9iIz/AAElJslJvwLzZ24e1MjTkYlqA/WuAxx+/pLrFb8hk4bfkey2L5GbW0bMyFrHXVjg2N4ctgAD6jGzp35sfOkf4mdI3e3QwdnjXHpUWaaG9/pLT+I9HgNBNE45nwNUYpjwRey4wIAEACABAAgAQAIAEACABAAgAQAIAEAFX6T4mQQNSSQgAQAIAEACABAAgAQAIAf/2Q==';

marker.setStyle(new Style({
  image:new Icon({
    src: urlImg
  })
}));
var vectorSource = new VectorSource({
  features: [marker]
});
var markerVectorLayer = new VectorLayer({
  source: vectorSource,
});
map.addLayer(markerVectorLayer);



// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import {Draw, Modify, Snap} from 'ol/interaction';
// import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
// import {OSM, Vector as VectorSource} from 'ol/source';
// import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';

// var raster = new TileLayer({//bản đồ
//   source: new OSM()
// });

// var source = new VectorSource();
// var vector = new VectorLayer({
//   source: source,
//   style: new Style({
//     fill: new Fill({
//       color: 'rgba(255, 255, 255, 0.2)'
//     }),
//     stroke: new Stroke({ //border
//       color: '#ffcc33',
//       width: 2
//     }),
//     image: new CircleStyle({//point
//       radius: 15,
//       fill: new Fill({
//         color: '#ffcc33'
//       })
//     })
//   })
// });

// var map = new Map({
//   layers: [raster, vector],
//   target: 'map',
//   view: new View({
//     center: [-11000000, 4600000],
//     zoom: 4
//   })
// });

// var modify = new Modify({source: source});
// map.addInteraction(modify);

// var draw, snap; // global so we can remove them later
// var typeSelect = document.getElementById('type');

// function addInteractions() {
//   draw = new Draw({
//     source: source,
//     type: typeSelect.value
//   });
//   map.addInteraction(draw);
//   snap = new Snap({source: source});
//   map.addInteraction(snap);

// }

// /**
//  * Handle change event.
//  */
// typeSelect.onchange = function() {
//   map.removeInteraction(draw);
//   map.removeInteraction(snap);
//   addInteractions();
// };

// addInteractions();