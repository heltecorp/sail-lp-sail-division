# Sail Landing Page (2025-09)

これは、日本語会話サービス「Sail」のユーザー獲得を目的として制作されたランディングページです。
UI/UX Alchemistによって、魅力的でインタラクティブな体験を提供し、コンバージョンを最大化するよう設計されています。

## ✨ 主な機能 (Features)

- **心に響くUI/UX:** ユーザーの感情に訴えかけるコピーと、温かみのあるデザイン。
- **動的なアニメーション:** スクロール連動のフェードインや、ステップ間のラインアニメーションが、ユーザーを飽きさせません。
- **信頼性の演出:** 横スクロールするメディアロゴが、サービスの信頼性を視覚的に伝えます。
- **インタラクティブな体験:** 利用者の声モーダルや、各種ホバーエフェクトが、触って楽しいサイトを実現します。
- **Google Apps Script連携:** 「プレミアムプラン」の先行登録フォームに入力されたメールアドレスを、自動でGoogleスプレッドシートに記録します。

## 🚀 セットアップとデプロイ (Setup & Deployment)

このプロジェクトを正しく動作させるためには、1つだけ設定が必要です。

1.  **Google Apps Script (GAS) の設定:**
    - `gas_script.js` の内容を元に、ご自身のGoogleアカウントでGASプロジェクトを作成し、ウェブアプリとしてデプロイしてください。（詳細は `gas_script.js` のコメントを参照）
    - デプロイ後に取得したウェブアプリのURLをコピーします。

2.  **URLの貼り付け:**
    - `public/assets/js/main.js` を開き、ファイルの一番上にある以下の行を見つけます。
    ```javascript
    const GAS_WEB_APP_URL = 'YOUR_GAS_WEB_APP_URL';
    ```
    - `'YOUR_GAS_WEB_APP_URL'` の部分を、ステップ1でコピーしたご自身のURLに書き換えてください。

3.  **GitHub Pagesへのデプロイ:**
    - このリポジトリをGitHubにプッシュします。
    - リポジトリの `Settings` > `Pages` に移動し、`Source` を `Deploy from a branch` に設定します。
    - `/(root)` のプルダウンから `/docs` を選択し、ブランチ（例: `main`）を選択して保存します。 **(重要: GitHub Pagesのソースを `public` フォルダに設定する必要があります。リポジトリのルートに `public` フォルダをデプロイするようにしてください) **
    - しばらくすると、 `https://<あなたのユーザー名>.github.io/<リポジトリ名>/` でサイトが公開されます。

## 🛠️ 使用技術 (Technology Stack)

- HTML5
- Tailwind CSS
- Vanilla JavaScript (ES6+)
- Google Apps Script (GAS)
