import {Component, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DentistApp';
  images: any[] = [];
  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 5
    },
    {
      breakpoint: '560px',
      numVisible: 3
    }
  ];
  pricingList: any[] = [];
  pricingListTreeFull: TreeNode[] = [];
  options: any;

  ngOnInit() {
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };
    this.initImmages();
    this.initPricingList();
    this.initPricingListFull();
  }

  initPricingList() {
    this.pricingList.push({
      image: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/purchase-icon.png",
      text: "Wypełnienie zęba stałego",
      price: "150-300 zł"
    });

    this.pricingList.push({
      image: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/purchase-icon.png",
      text: "Cennik opcja 2",
      price: "200 zł"
    });

    this.pricingList.push({
      image: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/purchase-icon.png",
      text: "Cennik opcja 3",
      price: "200 zł"
    });

    this.pricingList.push({
      image: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/purchase-icon.png",
      text: "Cennik opcja 4",
      price: "200 zł"
    });

    this.pricingList.push({
      image: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/purchase-icon.png",
      text: "Cennik opcja 5",
      price: "200 zł"
    });
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  private initImmages() {
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag1.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img1thumb.jpg"
    });
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag2.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img2thumb.jpg"
    });
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag3.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img3thumb.jpg"
    });
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag5.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img5thumb.jpg"
    });
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag6.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img6thumb.jpg"
    });
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag7.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img7thumb.jpg"
    });
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag8.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img8thumb.jpg"
    });
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag9.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img9thumb.jpg"
    });
    this.images.push({
      full_size: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/imag10.jpg",
      thumbnail: "https://raw.githubusercontent.com/marcino8/DentalApp/master/img/img10thumb.jpg"
    });
  }

  private initPricingListFull() {
    this.pricingListTreeFull.push({
      data: {service: "Ortodoncja", price:""},
      children: [
        {
          data: {service: "Konsultacja Ortodontyzcna", price:"100 zł"},
        },
        {
          data: {service: "Plan leczenia", price:"120 zł"},
        },
        {
          data: {service: "Wizyta z wyciskami", price:"150 zł"},
        },
        {
          data: {service: "Aparat ruchomy", price:""},
          children: [
            {
              data: {service: "Aparat ruchomy", price:"700-1000 zł"},
            },
            {
              data: {service: "Wizyty kontrolne", price:"80-120 zł"},
            },
          ]
        },
        {
          data: {service: "Aparaty stałe", price:""},
          children: [
            {
              data: {service: "Aparat stały grubołukowy", price:"600-800 zł"},
            },
            {
              data: {service: "Aparat stały cienkołukowy", price:""},
              children: [
                {
                  data: {service: "z. metalowe", price:"2000 zł"},
                },
                {
                  data: {service: "z. estetyczne", price:"3000 zł"},
                },
                {
                  data: {service: "z. samoligaturujące", price:"3500 zł"},
                },
              ]
            },
            {
              data: {service: "Wizyty kontrolne", price:"100-200 zł"},
            },
            {
              data: {service: "Zdjęcie aparatu", price:"100 zł / łuk"},
            },
          ]
        },
        {
          data: {service: "Aparat retencyjny", price:""},
          children: [
            {
              data: {service: "Retainer stały", price:"300 zł"},
            },
            {
              data: {service: "Płytka retencyjna", price:"500 zł"},
            },
          ]
        },
      ]
    })

    this.pricingListTreeFull.push({
      data: {service: "Stomatologia zachowawcza", price:""},
      children: [
        {
          data: {service: "Konsultacja / przegląd", price:"100 zł"},
        },
        {
          data: {service: "Badanie kontrolne", price:"80 zł"},
        },
        {
          data: {service: "Znieczulenie", price:"30-40 zł"},
        },
        {
          data: {service: "Rtg punktowe", price:"40 zł"},
        },
        {
          data: {service: "Zęby stałe", price:""},
          children: [
            {
              data: {service: "Wypełnienie kompozytowe", price:"150-300 zł"},
            },
            {
              data: {service: "Wypełnienie glasjonometrem", price:"120-150 zł"},
            },
            {
              data: {service: "Odbudowa zęba po endoterapii", price:"350 zł"},
            },
            {
              data: {service: "Korekta kształtu zęba", price:"200-250 zł"},
            },
            {
              data: {service: "Zamknięcie diastemy", price:"350 zł"},
            },
            {
              data: {service: "Licówka kompozytowa", price:"350-400-250 zł"},
            },
            {
              data: {service: "Most klejony na włóknach szklanych", price:"400-600 zł"},
            },
            {
              data: {service: "Opatrunek leczniczy", price:"120 zł"},
            },
            {
              data: {service: "Wkład k/k metalowy", price:"120 zł"},
            },
            {
              data: {service: "Wkład z włókna szklanego", price:"200 zł"},
            },
          ]
        },
        {
          data: {service: "Zęby mleczne", price:""},
          children: [
            {
              data: {service: "Wizyta adaptacyjna dzieci", price:"100 zł"},
            },
            {
              data: {service: "Wypełnienie w zębie mlecznym glasjonometrem", price:"100 zł"},
            },
            {
              data: {service: "Wypełnienie w zębie mlecznym kompozytowe", price:"120 zł"},
            },
            {
              data: {service: "Opatrunek w zębie mlecznym", price:"80 zł"},
            },
            {
              data: {service: "Trepanacja komory zęba mlecznego", price:"80 zł"},
            },
          ]
        },
      ]
    })

    this.pricingListTreeFull.push({
      data: {service: "Chirurgia", price:""},
      children: [
        {
          data: {service: "Ekstrakcja zęba mlecznego", price:"80-150 zł"},
        },
        {
          data: {service: "Ekstrakcja prosta", price:"200-300 zł"},
        },
        {
          data: {service: "Ekstrakcja chirurgiczna z separacją korzeni", price:"300-400 zł"},
        },
        {
          data: {service: "Szycie rany poekstrakcyjnej", price:"80 zł"},
        },
        {
          data: {service: "Nacięcie ropnia z założeniem sączka", price:"130 zł"},
        },
        {
          data: {service: "Odbarczenie ropnia przyzębicowego", price:"80-100 zł"},
        },
        {
          data: {service: "Decapuchonnement", price:"150 zł"},
        },
        {
          data: {service: "Zaopatrzenie zębodołu po ekstrakcji w innym gabinecie", price:"70 zł"},
        },
        {
          data: {service: "Usunięcie szwów założonych w innym gabinecie", price:"50 zł"},
        }
      ]
    })

    this.pricingListTreeFull.push({
      data: {service: "Protetyka", price:""},
      children: [
        {
          data: {service: "Inlay / Onlay / Overlay", price:""},
          children: [
            {
              data: {service: "kompozytowy", price:"600"},
            },
            {
              data: {service: "porcelanowy", price:"1000"},
            }
          ]
        },
        {
          data: {service: "Korony", price:""},
          children: [
            {
              data: {service: "Korona lana licowana porcelaną", price:"900 zł"},
            },
            {
              data: {service: "Korona cyrkonowa", price:"1500 zł"},
            },
            {
              data: {service: "Korona tymczasowa", price:"80 zł"},
            },
            {
              data: {service: "Osadzenie korony wyk. w innym gabinecie", price:"120 zł"},
            },
            {
              data: {service: "Usunięcie korony", price:"80 zł"},
            },
          ]
        },
        {
          data: {service: "Protezy", price:""},
          children: [
            {
              data: {service: "Proteza akrylowa", price:"800 zł"},
            },
            {
              data: {service: "Proteza szkieletowa", price:"50 zł"},
            },
            {
              data: {service: "Komplet protez", price:"1600 zł"},
            },
            {
              data: {service: "Mikroproteza do 3 punktów", price:"450 zł"},
            },
            {
              data: {service: "Zasuwa / zatrzask", price:"500 zł"},
            },
            {
              data: {service: "Siatka wzmacniająca", price:"150 zł"},
            },
            {
              data: {service: "Przezroczysty akryl", price:"150 zł"},
            },
            {
              data: {service: "Podścielenie protezy", price:"250 zł"},
            },
            {
              data: {service: "Naprawa protezy", price:"200 zł"},
            },
            {
              data: {service: "Dostawienie zęba lub klamry do protezy", price:"200 zł"},
            },
          ]
        },
      ]
    })

    this.pricingListTreeFull.push({
      data: {service: "Profilaktyka", price:""},
      children: [
        {
          data: {service: "Fluoryzacja zębów stałych (dwa łuki zębowe)", price:"100 zł"},
        },
        {
          data: {service: "Fluoryzacja zębów mlecznych", price:"80 zł"},
        },
        {
          data: {service: "Lakowanie (jeden ząb)", price:"60 zł"},
        },
        {
          data: {service: "Skaling i polerowanie", price:"170 zł"},
        },
        {
          data: {service: "Skaling i piaskowanie", price:"220 zł"},
        },
        {
          data: {service: "Skaling, piaskowanie i fluoryzacja", price:"280 zł"},
        },
      ]
    })

    this.pricingListTreeFull.push({
      data: {service: "Wybielanie", price:""},
      children: [
        {
          data: {service: "Wybielanie nakładkowe (szyny + żel 4 szt.)", price:"700 zł"},
        },
        {
          data: {service: "Dodatkowy żel wybielający (2 szt.)", price:"150 zł"},
        },
        {
          data: {service: "Wybielanie gabinetowe", price:"900 zł"},
        },
        {
          data: {service: "Wybielanie zęba po endoterapii", price:"250 zł"},
        },
      ]
    })

    this.pricingListTreeFull.push({
      data: {service: "Szyny relaksacyjne", price:""},
      children: [
        {
          data: {service: "Badanie i wyciski", price:"150 zł"},
        },
        {
          data: {service: "Rejestraty do szyny", price:"150 zł"},
        },
        {
          data: {service: "Szyna z prowadzeniem kołowym, siecznym", price:"500 zł"},
        },
        {
          data: {service: "Szyna relaskacyjna miękka", price:"350 zł"},
        },
        {
          data: {service: "Szyna relaskacyjna twarda", price:"400 zł"},
        },
        {
          data: {service: "Wizyta kontrolna", price:"80-120 zł"},
        },
      ]
    })

    this.pricingListTreeFull.push({
      data: {service: "Endodoncja", price:""},
      children: [
        {
          data: {service: "Leczenie endodontyczne maszynowe", price:"150 zł"},
          children: [
            {
              data: {service: "Ząb 1 kanałowy", price:"Razem - 400 zł"},
              children: [
                {
                  data: {service: "1 wizyta", price:"100"},
                },
                {
                  data: {service: "2 wizyta", price:"200"},
                },
                {
                  data: {service: "3 wizyta", price:"100"},
                }
              ]
            },
            {
              data: {service: "Ząb 2 kanałowy", price:"Razem - 500 zł"},
              children: [
                {
                  data: {service: "1 wizyta", price:"100"},
                },
                {
                  data: {service: "2 wizyta", price:"200"},
                },
                {
                  data: {service: "3 wizyta", price:"200"},
                }
              ]
            },
            {
              data: {service: "Ząb 3 kanałowy", price:"Razem - 700 zł"},
              children: [
                {
                  data: {service: "1 wizyta", price:"200"},
                },
                {
                  data: {service: "2 wizyta", price:"250"},
                },
                {
                  data: {service: "3 wizyta", price:"250"},
                }
              ]
            },
            {
              data: {service: "Odbudowa ściany zęba w trakcie leczenia", price:"150 zł"},
            },
            {
              data: {service: "Opatrunek międyz wizytami endoterapii", price:"100 zł"},
            },
          ]
        },
        {
          data: {service: "Powtórne leczenie endodontyczne", price:""},
          children: [
            {
              data: {service: "Udrożnienie kanałów", price:"200-300 zł"},
            },
          ]
        },
      ]
    })
  }

  goToLink(){
    window.open("https://www.google.pl/maps/place/Regu%C5%82a+Iwona.+Gabinet+stomatologiczny/@50.0182528,19.8949453,17z/data=!3m1!4b1!4m5!3m4!1s0x47165cf4f26aab21:0xc26d637a922b72a!8m2!3d50.0182197!4d19.896406?hl=pl", "_blank");
  }

  expandNode(rowNode: any) {
    rowNode.node.expanded = !rowNode.node.expanded;
    this.pricingListTreeFull = [...this.pricingListTreeFull];
  }
}
