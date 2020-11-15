import {Component, OnInit, ViewChild} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {NotificationService} from "carbon-components-angular"

import {NgScrollbar} from "ngx-scrollbar"
import {passwordRegex, passwordCheckerHelper, isFormItemValid, numberRegex} from "../../../@youpez"

@Component({
  selector: 'app-auth-book-a-demo',
  templateUrl: './auth-book-a-demo.component.html',
  styleUrls: ['./auth-book-a-demo.component.scss']
})
export class AuthBookADemoComponent implements OnInit {

  @ViewChild('scrollbar', {static: false}) scrollbar: NgScrollbar

  public formGroup: FormGroup
  public formGroup2: FormGroup
  public formGroup3: FormGroup
  public currentStep: number = 1
  public step1Valid: boolean = false
  public step2Valid: boolean = false
  public step1Loading: boolean = false
  public step2Loading: boolean = false
  public step3Loading: boolean = false
  public countries = [
    {content: "Afghanistan", id: "AF"},
    {content: "land Islands", id: "AX"},
    {content: "Albania", id: "AL"},
    {content: "Algeria", id: "DZ"},
    {content: "American Samoa", id: "AS"},
    {content: "AndorrA", id: "AD"},
    {content: "Angola", id: "AO"},
    {content: "Anguilla", id: "AI"},
    {content: "Antarctica", id: "AQ"},
    {content: "Antigua and Barbuda", id: "AG"},
    {content: "Argentina", id: "AR"},
    {content: "Armenia", id: "AM"},
    {content: "Aruba", id: "AW"},
    {content: "Australia", id: "AU"},
    {content: "Austria", id: "AT"},
    {content: "Azerbaijan", id: "AZ"},
    {content: "Bahamas", id: "BS"},
    {content: "Bahrain", id: "BH"},
    {content: "Bangladesh", id: "BD"},
    {content: "Barbados", id: "BB"},
    {content: "Belarus", id: "BY"},
    {content: "Belgium", id: "BE"},
    {content: "Belize", id: "BZ"},
    {content: "Benin", id: "BJ"},
    {content: "Bermuda", id: "BM"},
    {content: "Bhutan", id: "BT"},
    {content: "Bolivia", id: "BO"},
    {content: "Bosnia and Herzegovina", id: "BA"},
    {content: "Botswana", id: "BW"},
    {content: "Bouvet Island", id: "BV"},
    {content: "Brazil", id: "BR"},
    {content: "British Indian Ocean Territory", id: "IO"},
    {content: "Brunei Darussalam", id: "BN"},
    {content: "Bulgaria", id: "BG"},
    {content: "Burkina Faso", id: "BF"},
    {content: "Burundi", id: "BI"},
    {content: "Cambodia", id: "KH"},
    {content: "Cameroon", id: "CM"},
    {content: "Canada", id: "CA"},
    {content: "Cape Verde", id: "CV"},
    {content: "Cayman Islands", id: "KY"},
    {content: "Central African Republic", id: "CF"},
    {content: "Chad", id: "TD"},
    {content: "Chile", id: "CL"},
    {content: "China", id: "CN"},
    {content: "Christmas Island", id: "CX"},
    {content: "Cocos (Keeling) Islands", id: "CC"},
    {content: "Colombia", id: "CO"},
    {content: "Comoros", id: "KM"},
    {content: "Congo", id: "CG"},
    {content: "Congo, The Democratic Republic of the", id: "CD"},
    {content: "Cook Islands", id: "CK"},
    {content: "Costa Rica", id: "CR"},
    {content: "Cote D Ivoire", id: "CI"},
    {content: "Croatia", id: "HR"},
    {content: "Cuba", id: "CU"},
    {content: "Cyprus", id: "CY"},
    {content: "Czech Republic", id: "CZ"},
    {content: "Denmark", id: "DK"},
    {content: "Djibouti", id: "DJ"},
    {content: "Dominica", id: "DM"},
    {content: "Dominican Republic", id: "DO"},
    {content: "Ecuador", id: "EC"},
    {content: "Egypt", id: "EG"},
    {content: "El Salvador", id: "SV"},
    {content: "Equatorial Guinea", id: "GQ"},
    {content: "Eritrea", id: "ER"},
    {content: "Estonia", id: "EE"},
    {content: "Ethiopia", id: "ET"},
    {content: "Falkland Islands (Malvinas)", id: "FK"},
    {content: "Faroe Islands", id: "FO"},
    {content: "Fiji", id: "FJ"},
    {content: "Finland", id: "FI"},
    {content: "France", id: "FR"},
    {content: "French Guiana", id: "GF"},
    {content: "French Polynesia", id: "PF"},
    {content: "French Southern Territories", id: "TF"},
    {content: "Gabon", id: "GA"},
    {content: "Gambia", id: "GM"},
    {content: "Georgia", id: "GE"},
    {content: "Germany", id: "DE"},
    {content: "Ghana", id: "GH"},
    {content: "Gibraltar", id: "GI"},
    {content: "Greece", id: "GR"},
    {content: "Greenland", id: "GL"},
    {content: "Grenada", id: "GD"},
    {content: "Guadeloupe", id: "GP"},
    {content: "Guam", id: "GU"},
    {content: "Guatemala", id: "GT"},
    {content: "Guernsey", id: "GG"},
    {content: "Guinea", id: "GN"},
    {content: "Guinea-Bissau", id: "GW"},
    {content: "Guyana", id: "GY"},
    {content: "Haiti", id: "HT"},
    {content: "Heard Island and Mcdonald Islands", id: "HM"},
    {content: "Holy See (Vatican City State)", id: "VA"},
    {content: "Honduras", id: "HN"},
    {content: "Hong Kong", id: "HK"},
    {content: "Hungary", id: "HU"},
    {content: "Iceland", id: "IS"},
    {content: "India", id: "IN"},
    {content: "Indonesia", id: "ID"},
    {content: "Iran, Islamic Republic Of", id: "IR"},
    {content: "Iraq", id: "IQ"},
    {content: "Ireland", id: "IE"},
    {content: "Isle of Man", id: "IM"},
    {content: "Israel", id: "IL"},
    {content: "Italy", id: "IT"},
    {content: "Jamaica", id: "JM"},
    {content: "Japan", id: "JP"},
    {content: "Jersey", id: "JE"},
    {content: "Jordan", id: "JO"},
    {content: "Kazakhstan", id: "KZ"},
    {content: "Kenya", id: "KE"},
    {content: "Kiribati", id: "KI"},
    {content: "Korea, Democratic People S Republic of", id: "KP"},
    {content: "Korea, Republic of", id: "KR"},
    {content: "Kuwait", id: "KW"},
    {content: "Kyrgyzstan", id: "KG"},
    {content: "Lao People S Democratic Republic", id: "LA"},
    {content: "Latvia", id: "LV"},
    {content: "Lebanon", id: "LB"},
    {content: "Lesotho", id: "LS"},
    {content: "Liberia", id: "LR"},
    {content: "Libyan Arab Jamahiriya", id: "LY"},
    {content: "Liechtenstein", id: "LI"},
    {content: "Lithuania", id: "LT"},
    {content: "Luxembourg", id: "LU"},
    {content: "Macao", id: "MO"},
    {content: "Macedonia, The Former Yugoslav Republic of", id: "MK"},
    {content: "Madagascar", id: "MG"},
    {content: "Malawi", id: "MW"},
    {content: "Malaysia", id: "MY"},
    {content: "Maldives", id: "MV"},
    {content: "Mali", id: "ML"},
    {content: "Malta", id: "MT"},
    {content: "Marshall Islands", id: "MH"},
    {content: "Martinique", id: "MQ"},
    {content: "Mauritania", id: "MR"},
    {content: "Mauritius", id: "MU"},
    {content: "Mayotte", id: "YT"},
    {content: "Mexico", id: "MX"},
    {content: "Micronesia, Federated States of", id: "FM"},
    {content: "Moldova, Republic of", id: "MD"},
    {content: "Monaco", id: "MC"},
    {content: "Mongolia", id: "MN"},
    {content: "Montenegro", id: "ME"},
    {content: "Montserrat", id: "MS"},
    {content: "Morocco", id: "MA"},
    {content: "Mozambique", id: "MZ"},
    {content: "Myanmar", id: "MM"},
    {content: "Namibia", id: "NA"},
    {content: "Nauru", id: "NR"},
    {content: "Nepal", id: "NP"},
    {content: "Netherlands", id: "NL"},
    {content: "Netherlands Antilles", id: "AN"},
    {content: "New Caledonia", id: "NC"},
    {content: "New Zealand", id: "NZ"},
    {content: "Nicaragua", id: "NI"},
    {content: "Niger", id: "NE"},
    {content: "Nigeria", id: "NG"},
    {content: "Niue", id: "NU"},
    {content: "Norfolk Island", id: "NF"},
    {content: "Northern Mariana Islands", id: "MP"},
    {content: "Norway", id: "NO"},
    {content: "Oman", id: "OM"},
    {content: "Pakistan", id: "PK"},
    {content: "Palau", id: "PW"},
    {content: "Palestinian Territory, Occupied", id: "PS"},
    {content: "Panama", id: "PA"},
    {content: "Papua New Guinea", id: "PG"},
    {content: "Paraguay", id: "PY"},
    {content: "Peru", id: "PE"},
    {content: "Philippines", id: "PH"},
    {content: "Pitcairn", id: "PN"},
    {content: "Poland", id: "PL"},
    {content: "Portugal", id: "PT"},
    {content: "Puerto Rico", id: "PR"},
    {content: "Qatar", id: "QA"},
    {content: "Reunion", id: "RE"},
    {content: "Romania", id: "RO"},
    {content: "Russian Federation", id: "RU"},
    {content: "RWANDA", id: "RW"},
    {content: "Saint Helena", id: "SH"},
    {content: "Saint Kitts and Nevis", id: "KN"},
    {content: "Saint Lucia", id: "LC"},
    {content: "Saint Pierre and Miquelon", id: "PM"},
    {content: "Saint Vincent and the Grenadines", id: "VC"},
    {content: "Samoa", id: "WS"},
    {content: "San Marino", id: "SM"},
    {content: "Sao Tome and Principe", id: "ST"},
    {content: "Saudi Arabia", id: "SA"},
    {content: "Senegal", id: "SN"},
    {content: "Serbia", id: "RS"},
    {content: "Seychelles", id: "SC"},
    {content: "Sierra Leone", id: "SL"},
    {content: "Singapore", id: "SG"},
    {content: "Slovakia", id: "SK"},
    {content: "Slovenia", id: "SI"},
    {content: "Solomon Islands", id: "SB"},
    {content: "Somalia", id: "SO"},
    {content: "South Africa", id: "ZA"},
    {content: "South Georgia and the South Sandwich Islands", id: "GS"},
    {content: "Spain", id: "ES"},
    {content: "Sri Lanka", id: "LK"},
    {content: "Sudan", id: "SD"},
    {content: "Suriname", id: "SR"},
    {content: "Svalbard and Jan Mayen", id: "SJ"},
    {content: "Swaziland", id: "SZ"},
    {content: "Sweden", id: "SE"},
    {content: "Switzerland", id: "CH"},
    {content: "Syrian Arab Republic", id: "SY"},
    {content: "Taiwan, Province of China", id: "TW"},
    {content: "Tajikistan", id: "TJ"},
    {content: "Tanzania, United Republic of", id: "TZ"},
    {content: "Thailand", id: "TH"},
    {content: "Timor-Leste", id: "TL"},
    {content: "Togo", id: "TG"},
    {content: "Tokelau", id: "TK"},
    {content: "Tonga", id: "TO"},
    {content: "Trinidad and Tobago", id: "TT"},
    {content: "Tunisia", id: "TN"},
    {content: "Turkey", id: "TR"},
    {content: "Turkmenistan", id: "TM"},
    {content: "Turks and Caicos Islands", id: "TC"},
    {content: "Tuvalu", id: "TV"},
    {content: "Uganda", id: "UG"},
    {content: "Ukraine", id: "UA"},
    {content: "United Arab Emirates", id: "AE"},
    {content: "United Kingdom", id: "GB"},
    {content: "United States", id: "US"},
    {content: "United States Minor Outlying Islands", id: "UM"},
    {content: "Uruguay", id: "UY"},
    {content: "Uzbekistan", id: "UZ"},
    {content: "Vanuatu", id: "VU"},
    {content: "Venezuela", id: "VE"},
    {content: "Viet Nam", id: "VN"},
    {content: "Virgin Islands, British", id: "VG"},
    {content: "Virgin Islands, U.S.", id: "VI"},
    {content: "Wallis and Futuna", id: "WF"},
    {content: "Western Sahara", id: "EH"},
    {content: "Yemen", id: "YE"},
    {content: "Zambia", id: "ZM"},
    {content: "Zimbabwe", id: "ZW"}
  ]
  public usStates = [
    {
      content: "Alabama",
      id: "AL"
    },
    {
      content: "Alaska",
      id: "AK"
    },
    {
      content: "American Samoa",
      id: "AS"
    },
    {
      content: "Arizona",
      id: "AZ"
    },
    {
      content: "Arkansas",
      id: "AR"
    },
    {
      content: "California",
      id: "CA"
    },
    {
      content: "Colorado",
      id: "CO"
    },
    {
      content: "Connecticut",
      id: "CT"
    },
    {
      content: "Delaware",
      id: "DE"
    },
    {
      content: "District Of Columbia",
      id: "DC"
    },
    {
      content: "Federated States Of Micronesia",
      id: "FM"
    },
    {
      content: "Florida",
      id: "FL"
    },
    {
      content: "Georgia",
      id: "GA"
    },
    {
      content: "Guam",
      id: "GU"
    },
    {
      content: "Hawaii",
      id: "HI"
    },
    {
      content: "Idaho",
      id: "ID"
    },
    {
      content: "Illinois",
      id: "IL"
    },
    {
      content: "Indiana",
      id: "IN"
    },
    {
      content: "Iowa",
      id: "IA"
    },
    {
      content: "Kansas",
      id: "KS"
    },
    {
      content: "Kentucky",
      id: "KY"
    },
    {
      content: "Louisiana",
      id: "LA"
    },
    {
      content: "Maine",
      id: "ME"
    },
    {
      content: "Marshall Islands",
      id: "MH"
    },
    {
      content: "Maryland",
      id: "MD"
    },
    {
      content: "Massachusetts",
      id: "MA"
    },
    {
      content: "Michigan",
      id: "MI"
    },
    {
      content: "Minnesota",
      id: "MN"
    },
    {
      content: "Mississippi",
      id: "MS"
    },
    {
      content: "Missouri",
      id: "MO"
    },
    {
      content: "Montana",
      id: "MT"
    },
    {
      content: "Nebraska",
      id: "NE"
    },
    {
      content: "Nevada",
      id: "NV"
    },
    {
      content: "New Hampshire",
      id: "NH"
    },
    {
      content: "New Jersey",
      id: "NJ"
    },
    {
      content: "New Mexico",
      id: "NM"
    },
    {
      content: "New York",
      id: "NY"
    },
    {
      content: "North Carolina",
      id: "NC"
    },
    {
      content: "North Dakota",
      id: "ND"
    },
    {
      content: "Northern Mariana Islands",
      id: "MP"
    },
    {
      content: "Ohio",
      id: "OH"
    },
    {
      content: "Oklahoma",
      id: "OK"
    },
    {
      content: "Oregon",
      id: "OR"
    },
    {
      content: "Palau",
      id: "PW"
    },
    {
      content: "Pennsylvania",
      id: "PA"
    },
    {
      content: "Puerto Rico",
      id: "PR"
    },
    {
      content: "Rhode Island",
      id: "RI"
    },
    {
      content: "South Carolina",
      id: "SC"
    },
    {
      content: "South Dakota",
      id: "SD"
    },
    {
      content: "Tennessee",
      id: "TN"
    },
    {
      content: "Texas",
      id: "TX"
    },
    {
      content: "Utah",
      id: "UT"
    },
    {
      content: "Vermont",
      id: "VT"
    },
    {
      content: "Virgin Islands",
      id: "VI"
    },
    {
      content: "Virginia",
      id: "VA"
    },
    {
      content: "Washington",
      id: "WA"
    },
    {
      content: "West Virginia",
      id: "WV"
    },
    {
      content: "Wisconsin",
      id: "WI"
    },
    {
      content: "Wyoming",
      id: "WY"
    }
  ]
  public industries = [
    {content: "Software", id: "1"},
    {content: "Marketing", id: "2"},
    {content: "Hardware", id: "3"},
    {content: "IT", id: "4"},
    {content: "AI", id: "5"},
    {content: "Data-science", id: "6"},
  ]
  public storage = [
    {content: "1GB", id: "1"},
    {content: "2GB", id: "2"},
    {content: "3GB", id: "3"},
    {content: "4GB", id: "4"},
    {content: "5GB", id: "5"},
    {content: "6GB", id: "6"},
  ]
  public areaCodes = [
    {content: "+1", id: "1"},
    {content: "+2", id: "2"},
    {content: "+3", id: "3"},
    {content: "+22", id: "4"},
    {content: "+33", id: "5"},
    {content: "+44", id: "6"},
  ]

  constructor(protected formBuilder: FormBuilder,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.createForm1()
    this.createForm2()
    this.createForm3()
  }

  createForm1() {
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      condition: ['', [Validators.requiredTrue]],
    }, {updateOn: 'change'})
  }

  createForm2() {
    this.formGroup2 = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(4), Validators.pattern(numberRegex)]],
      area: ['1', [Validators.required]],
      company: ['', [Validators.required, Validators.minLength(4)]],
      job: ['', [Validators.required, Validators.minLength(4)]],
      industry: ['', [Validators.required]],
      storage: ['', [Validators.required]],
    }, {updateOn: 'change'})
  }

  createForm3() {
    this.formGroup3 = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(7), Validators.pattern(numberRegex)]],
    }, {updateOn: 'change'})
  }

  onSubmit() {
    this.formGroup.markAllAsTouched()
    if (!this.formGroup.valid) {
      return
    }
    this.step1Loading = true
    setTimeout(() => {
      this.gotoStep(2)
      this.step1Loading = false
      this.step1Valid = true
    }, 2500)
  }

  onSubmit2() {
    this.formGroup2.markAllAsTouched()
    if (!this.formGroup2.valid) {
      return
    }
    this.step2Loading = true
    setTimeout(() => {
      this.gotoStep(3)
      this.step2Loading = false
      this.step2Valid = true
    }, 2500)
  }

  onSubmit3() {
    this.formGroup3.markAllAsTouched()
    this.step3Loading = true

    setTimeout(() => {
      this.gotoStep(3)
      this.step3Loading = false
    }, 2500)
  }

  gotoStep(number) {
    this.currentStep = number
    const element = `#form_${number}`
    setTimeout(() => {
      this.scrollbar.scrollTo({bottom: 0, duration: 400})
    }, 400)
  }

  isValid(name) {
    return isFormItemValid(this.formGroup, name)
  }

  isValid2(name) {
    return isFormItemValid(this.formGroup2, name)
  }

  isValid3(name) {
    return isFormItemValid(this.formGroup3, name)
  }

  getPasswordClass(name, type) {
    const instance = this.formGroup.get(name)
    const test = !passwordCheckerHelper(instance.value, type) && (instance.dirty || instance.touched)
    return test ? 'app-color-danger' : ((instance.dirty || instance.touched) ? 'app-color-success' : '')
  }
}
