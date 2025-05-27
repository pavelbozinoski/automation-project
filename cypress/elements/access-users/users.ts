import { UserCredentials } from './userCredentials';

export class Users {
  static MarijaStojanovska: UserCredentials = {
    name: 'MarijaStojanovska',
    email: 'marija.stojanovska@testmail.mk',
    password: 'TestLozinka2024!',
    firstName: 'Marija',
    lastName: 'Stojanovska',
    company: 'Testiranje DOO',
    address1: 'Ul. Makedonska 12',
    address2: 'Stan 3',
    country: 'India',
    state: 'Bitola',
    city: 'Bitola',
    zipcode: '7000',
    mobileNumber: '075987654',
    dob: {
      day: '5',
      month: 'December',
      year: '1993',
    },
  };

  static PetarIlievski: UserCredentials = {
    name: 'PetarIlievski',
    email: 'petar.ilievski@testmail.mk',
    password: 'PetarLozinka2024!',
    firstName: 'Petar',
    lastName: 'Ilievski',
    company: 'Softver Plus',
    address1: 'Bul. Goce Delchev 77',
    address2: 'Sprat 2',
    country: 'India',
    state: 'Tetovo',
    city: 'Tetovo',
    zipcode: '1200',
    mobileNumber: '077654321',
    dob: {
      day: '9',
      month: 'September',
      year: '1991',
    },
  };

  static DimitarDimitrovski: UserCredentials = {
    name: 'DimitarDimitrovski',
    email: 'dimitar.dimitrovski@testmail.mk',
    password: 'DimitarLozinka2024!',
    firstName: 'Dimitar',
    lastName: 'Dimitrovski',
    company: 'Softver Plus Plus',
    address1: 'Bul. Goce Delchev 20',
    address2: 'Sprat 5',
    country: 'India',
    state: 'Delcevo',
    city: 'Delcevo',
    zipcode: '1200',
    mobileNumber: '071394121',
    dob: {
      day: '15',
      month: 'September',
      year: '1991',
    },
  };

  static NevalidenKorisnik: UserCredentials = {
    name: 'NevalidenKorisnik',
    email: 'nevaliden.korisnik@testmail.mk',
    password: 'nevalidenpasswoord1!!',
    firstName: 'Nevaliden',
    lastName: 'Korisnik',
    company: 'Nevaliden Softver',
    address1: 'Bul. Nevaliden',
    address2: 'Sprat 5',
    country: 'India',
    state: 'Nevaliden',
    city: 'Nevaliden',
    zipcode: '1200',
    mobileNumber: '0713941121',
    dob: {
      day: '15',
      month: 'September',
      year: '1991',
    },
  };

  // generate random user
  private static firstNames = [
    'Marija',
    'Stefan',
    'Elena',
    'Kristijan',
    'Simona',
    'Filip',
    'Angela',
    'Nikola',
  ];
  private static lastNames = [
    'Stojanovska',
    'Nikolov',
    'Petrovski',
    'Ivanovska',
    'Mitrevski',
    'Kostadinovska',
    'Todorov',
    'Georgiev',
  ];
  private static companies = [
    'Makedonski Kompani',
    'Petrovski Inc.',
    'Skopje Tech',
    'Bitola Solutions',
  ];
  private static streets = [
    'Ul. Makedonija 12',
    'Ul. Leninova 45',
    'Ul. Partizanska 7',
    'Ul. Goce Delcev 18',
  ];
  private static cities = ['Skopje', 'Bitola', 'Ohrid', 'Tetovo'];
  private static states = ['Skopje', 'Bitola', 'Ohrid', 'Tetovo'];
  private static countries = ['Canada', 'United States', 'India', 'Singapore'];
  private static zipcodes = ['1000', '7000', '6000', '1200'];

  private static getRandomElement(list: string[]): string {
    return list[Math.floor(Math.random() * list.length)];
  }

  private static generateRandomEmail(
    firstName: string,
    lastName: string,
  ): string {
    const timestamp = Date.now();
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${timestamp}@testmail.com`;
  }

  private static generateRandomDOB() {
    return {
      day: `${Math.floor(Math.random() * 28) + 1}`,
      month: `${Math.floor(Math.random() * 12) + 1}`,
      year: `${Math.floor(Math.random() * 30) + 1970}`,
    };
  }

  static get randomUser(): UserCredentials {
    const firstName = this.getRandomElement(this.firstNames);
    const lastName = this.getRandomElement(this.lastNames);
    const company = this.getRandomElement(this.companies);
    const address1 = this.getRandomElement(this.streets);
    const address2 = 'Apartment 5';
    const city = this.getRandomElement(this.cities);
    const state = this.getRandomElement(this.states);
    const country = this.getRandomElement(this.countries);
    const zipcode = this.getRandomElement(this.zipcodes);
    const dob = this.generateRandomDOB();
    const email = this.generateRandomEmail(firstName, lastName);

    return {
      name: `${firstName} ${lastName}`,
      email,
      password: 'Test1234!',
      firstName,
      lastName,
      company,
      address1,
      address2,
      country,
      state,
      city,
      zipcode,
      mobileNumber: '+38970111222',
      dob,
    };
  }
}
