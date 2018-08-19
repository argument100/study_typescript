export class GreetEvent {

  // コンストラクター
  constructor(private data: {[greet: string] : string}) {
  }

  // メソッド
    public greeting() : void {
      $('.js-test').text(this.data.greet);
    }
}