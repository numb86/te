開発や技術習得に使うための、雛形となるリポジトリ。  
いちいちビルドなどの設定を行うのは面倒なので。

## 入れてあるもの

- React
- React Router
- webpackによるReactやES2015などのビルド、トランスパイル
- webpack-dev-server
- Flow
- ESLint
- prettier


## 入れる予定のもの

- Yarn
- mocha
- power-assert
- 環境変数
- CSS関連

## メンテナンス方法

`develop`で拡張や保守を行う。必要ならトピックブランチで作業してから、`develop`にMergeする。  
`develop`での開発が終わったら、`operation-check`にMergeして、問題なく動いているか確認する。  
問題なければ、`develop`から`master`にプルリクエストを送る。

### 検証事項

あとで書く。

