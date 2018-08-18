export class GreetEvent {

  // コンストラクター
  constructor(private greet: string) {
  }

  // メソッド
    public greeting() : void {
      $('.js-test').text(this.greet);
    }
}