const SHEET_ID = "1HjypMAKDgU3u5KrfcICO21mFGgn4nC3RQ05k3HCUvBY"; // ★ここにあなたのスプレッドシートIDを貼り付け
const SHEET_NAME = "待機リスト"; // ★あなたのシート名に合わせて変更

function doPost(e) {
  try {
    const email = JSON.parse(e.postData.contents).email;

    // 簡単なメールアドレスのバリデーション
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "無効なメールアドレスです。" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.appendRow([new Date(), email]);

    // ★新規追加: 自動返信メールの送信
    const subject = "Sail先行登録ありがとうございます！";
    const body = `
${email}様

この度は、Sailのプレミアム・コーチングプラン先行登録にご興味をお持ちいただき、誠にありがとうございます。

サービス開始の準備が整い次第、改めてメールにてご連絡させていただきます。
今しばらくお待ちいただけますようお願い申し上げます。

ご不明な点がございましたら、お気軽にお問い合わせください。

今後ともSailをよろしくお願いいたします。

----------------------------------------------------
Sail運営事務局
[ウェブサイトのURLなど、連絡先情報をここに追加]
----------------------------------------------------
`;
    MailApp.sendEmail(email, subject, body); // MailAppにはGmailの権限が必要です

    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "登録が完了しました。確認メールを送信しました。" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // エラー発生時は、詳細なエラーメッセージをログに出力し、ユーザーには一般的なメッセージを返す
    Logger.log("GAS Error: " + error.message);
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "登録中にエラーが発生しました。時間をおいて再度お試しください。" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}