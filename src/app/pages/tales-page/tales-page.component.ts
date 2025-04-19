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
      title: "Titulo Épico",
      author: "Autor",
      chaptersQuantity: 5,
      date: "14/12/2204",
      likeQuantity: "10k",
      categories: ["A", "B", "C"],
      description: "Descrição aapsaiu dhapiudh asuipdh asuipdh iasphd uasiph duipahu iahsidhauips ndajskdn askj dmswjdk nsakjs dnpaksnd jadn akjsp djasd asd jiasj diasjd oiasjd oiasjd oasjd oasjd oasijd aosijd oapisjd oasij dioasjd ioasjd oiasj doasjd oiasj dioasj doiasj dioasj doiasj dioasjd oiasjd ",
    },
    {
      title: "Titulo Épico",
      author: "Autor",
      chaptersQuantity: 5,
      date: "14/12/2204",
      likeQuantity: "5",
      categories: ["A", "B", "C"],
      description: "Descrição"
    },
    {
      title: "Titulo Épico",
      author: "Autor",
      chaptersQuantity: 5,
      date: "14/12/2204",
      likeQuantity: "500",
      categories: ["A", "B", "C"],
      description: "Descrição"
    }
  ];

}
