export class Post  {

  constructor(public title: string,
              public description: string,
              public createDate: Date,
              public react: number,
              public comments: string,
              public imageUrl: string,
              public aimer: boolean) {
  }
}
