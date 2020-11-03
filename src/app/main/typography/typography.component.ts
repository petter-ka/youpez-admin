import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  public typography = [
    {
      section: 'Headings',
      desc: 'Productive type is reserved for use in web-based product design, where the user needs to focus on tasks. The Productive styles are curated to create a series of clear user expectations about hierarchy.',
    },
    {
      cssClass: 'app-productive-heading-01',
      content: 'This is for component and layout headings.',
      name: 'app-productive-heading-01',
    },
    {
      cssClass: 'app-productive-heading-02',
      content: 'This is for component and layout headings.',
      name: 'app-productive-heading-02',
    },
    {
      cssClass: 'app-productive-heading-03',
      content: 'This is for component and layout headings.',
      name: 'app-productive-heading-03',
    },
    {
      cssClass: 'app-productive-heading-04',
      content: 'This is for layout headings.',
      name: 'app-productive-heading-04',
    },
    {
      cssClass: 'app-productive-heading-05',
      content: 'This is for layout headings.',
      name: 'app-productive-heading-05',
    },
    {
      cssClass: 'app-productive-heading-06',
      content: 'This is for layout headings.',
      name: 'app-productive-heading-06',
    },
    {
      cssClass: 'app-productive-heading-07',
      content: 'This is for layout headings.',
      name: 'app-productive-heading-07',
    },
    {
      section: 'Supporting styles',
    },
    {
      cssClass: 'app-code-01',
      content: 'This is for inline code snippets and smaller code elements.',
      name: 'app-code-01',
    },
    {
      cssClass: 'app-code-02',
      content: 'This is for large code snippets and larger code elements.',
      name: 'app-code-02',
    },
    {
      cssClass: 'app-caption-01',
      content: 'This is for captions or legal content in a layout — not for body copy.',
      name: 'app-caption-01',
    },
    {
      cssClass: 'app-helper-text-01',
      content: 'This is for explanatory helper text that appears below a field title within a\n' +
        '              component.',
      name: 'app-helper-text-01',
    },
    {
      cssClass: 'app-label-01',
      content: 'This is for field labels in components and error messages.',
      name: 'app-label-01',
    },
    {
      section: 'Body',
    },
    {
      cssClass: 'app-body-short-01',
      content: 'This is for short paragraphs with no more than four lines and is commonly used in\n' +
        '              components.',
      name: 'app-body-short-01',
    },
    {
      cssClass: 'app-body-short-02',
      content: 'This is for short paragraphs with no more than four lines and is commonly used in\n' +
        '              the expressive type theme for layouts.',
      name: 'app-body-short-02',
    },
    {
      cssClass: 'app-body-long-01',
      content: 'This is commonly used in both the expressive and the productive type theme layouts\n' +
        '              for long paragraphs with more than four lines. It is a good size for comfortable, long-form reading. Use this\n' +
        '              for longer body copy in components such as accordion or structured list. Always left-align this type; never\n' +
        '              center it..',
      name: 'app-body-long-01',
    },
    {
      cssClass: 'app-body-long-02',
      content: 'This is commonly used in the expressive type theme layouts for long paragraphs with\n' +
        '              more than four lines. The looser line height and larger size makes for comfortable, long-form reading, in\n' +
        '              mediums that allow for more space. This size type is rarely used for body copy in components. Always\n' +
        '              left-align type; never center it.',
      name: 'app-body-long-02',
    },


    {
      section: 'Headings expressive',
      desc:'Expressive type is reserved for use in editorial and digital marketing experiences which may require more dynamic typographic hierarchies and more variety in the Heading scale. The Expressive styles are curated to create a series of clear user expectations while still allowing for a more dramatic, graphic use of type.'
    },

    {
      cssClass: 'app-expressive-heading-01',
      content: 'This is for component and layout headings.',
      name: 'app-expressive-heading-01',
    },
    {
      cssClass: 'app-expressive-heading-02',
      content: 'This is for component and layout headings.',
      name: 'app-expressive-heading-02',
    },
    {
      cssClass: 'app-expressive-heading-03',
      content: 'This is for component and layout headings.',
      name: 'app-expressive-heading-03',
    },
    {
      cssClass: 'app-expressive-heading-04',
      content: 'Heading style',
      name: 'app-expressive-heading-04',
    },
    {
      cssClass: 'app-expressive-heading-05',
      content: 'Heading style',
      name: 'app-expressive-heading-05',
    },
    {
      cssClass: 'app-expressive-heading-06',
      content: 'Heading style',
      name: 'app-expressive-heading-06',
    },


    {
      section: 'Paragraphs and quotes',
    },
    {
      cssClass: 'app-expressive-paragraph-01',
      content: 'Paragraph',
      name: 'app-expressive-paragraph-01',
    },
    {
      cssClass: 'app-quotation-01"',
      content: '“Quote.”',
      name: 'app-quotation-01',
    },
    {
      cssClass: 'app-quotation-02',
      content: '“Quote.”',
      name: 'app-quotation-02',
    },

    {
      section: 'Display',
    },
    {
      cssClass: 'app-display-01',
      content: 'Display',
      name: 'app-display-01',
    },
    {
      cssClass: 'app-display-02',
      content: 'Display',
      name: 'app-display-02',
    },
    {
      cssClass: 'app-display-03',
      content: 'Display',
      name: 'app-display-03',
    },
    {
      cssClass: 'app-display-04',
      content: 'Display',
      name: 'app-display-04',
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
