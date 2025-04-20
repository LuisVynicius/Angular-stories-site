import { Component } from '@angular/core';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { tale } from '../../shapes/tale';
import { TaleComponent } from '../shared/tale/tale.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tales-page',
  imports: [
    BackgroundRectangleComponent,
    TaleComponent,
    CommonModule
  ],
  templateUrl: './tales-page.component.html',
  styleUrl: './tales-page.component.css'
})
export class TalesPageComponent {

  tales: tale[] = [
    {
      "title": "Sombras de Gelo",
      "author": "Kazuki Yamato",
      "chaptersQuantity": 32,
      "creationDate": "08/03/2021",
      "updatedDate": "17/09/2023",
      "status": "Em andamento",
      "likeQuantity": "42k",
      "categories": ["Ação", "Fantasia", "Sobrenatural"],
      "description": "Em um mundo onde o gelo consome tudo, um guerreiro solitário luta contra as sombras do passado e as criaturas do frio eterno. Cercado por traições, profecias e segredos, ele precisa descobrir quem realmente é antes que tudo seja congelado para sempre."
    },
    {
      "title": "Circuitos da Alma",
      "author": "Lúcio Andrade",
      "chaptersQuantity": 78,
      "creationDate": "12/07/2018",
      "updatedDate": "29/01/2025",
      "status": "Completo",
      "likeQuantity": "120k",
      "categories": ["Ficção Científica", "Drama", "Psicológico"],
      "description": "Num futuro onde emoções podem ser codificadas, um engenheiro emocional tenta recuperar a memória de sua filha através de algoritmos proibidos. Mas quanto mais ele mergulha nesse código, mais percebe que a própria realidade pode ter sido manipulada."
    },
    {
      "title": "A Canção das Estações",
      "author": "Elena Torres",
      "chaptersQuantity": 15,
      "creationDate": "21/11/2015",
      "updatedDate": "03/04/2020",
      "status": "Hiato",
      "likeQuantity": "8k",
      "categories": ["Romance", "Fantasia", "Drama"],
      "description": "Primavera cantava para o amor, verão para a paixão, outono para as despedidas e inverno... para os corações partidos. Quatro reinos, quatro príncipes e uma garota que carrega todas as estações dentro de si."
    },
    {
      "title": "Código Rubro",
      "author": "Dante S.",
      "chaptersQuantity": 44,
      "creationDate": "09/09/2019",
      "updatedDate": "10/10/2022",
      "status": "Pausado",
      "likeQuantity": "33k",
      "categories": ["Mistério", "Suspense", "Cyberpunk"],
      "description": "Mensagens criptografadas, assassinatos em série e uma conspiração que se esconde no coração das redes neurais. Um ex-detetive com implantes ilegais precisa resolver o quebra-cabeça mais perigoso de sua vida: o Código Rubro."
    },
    {
      "title": "A Última Chama",
      "author": "Rafaela M.",
      "chaptersQuantity": 5,
      "creationDate": "14/12/2004",
      "updatedDate": "14/12/2204",
      "status": "Cancelado",
      "likeQuantity": "10k",
      "categories": ["Aventura", "Magia", "Pós-apocalipse"],
      "description": "Descrição aapsaiu dhapiudh asuipdh asuipdh iasphd uasiph duipahu iahsidhauips ndajskdn askj dmswjdk nsakjs dnpaksnd jadn akjsp djasd asd jiasj diasjd oiasjd oiasjd oasjd oasjd oasijd aosijd oapisjd oasij dioasjd ioasjd oiasj doasjd oiasj dioasj doiasj dioasj doiasj dioasjd oiasjd "
    }      
  ];

}
