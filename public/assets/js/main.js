document.addEventListener('DOMContentLoaded', () => {
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★【重要】ここにあなたのGASウェブアプリのURLを貼り付けてください！ ★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxwa9IEOF-GIjOrzY5YD55UAvo4va9_3tJZIQlk1brpRqKA2H5BMdo6vX5tKqp2gqctow/exec'; 

    // 以前のJavaScriptロジック (変更なし)
    const testimonials = [
        { id: 0, name: 'Caiさん', country: '台湾', quote: '私はFacebookで誰かの投稿を見てSailアプリを見つけました。その時、私は大学を卒業したばかりでした。日本語を専攻していた私は、卒業後に誰とも話す機会がなくなり、日本語のスキルが落ちてしまうのではないかと心配していました。出会った日本の方々は皆、とても優しく親切でした。気がつけば、私の日本語スキルは少しずつ向上していました。もちろん、最初はチャット形式でコミュニケーションを取っていましたが、この機会を通じて私の視野を広げてくれたことに心から感謝しています。', imgSrc: 'public/assets/images/Cai_Taiwan.png' },
        { id: 1, name: 'Cam Thoさん', country: 'ベトナム', quote: '私は約2年間日本で働いています。日本語を流暢に話せるようになりたいです。毎日自分で日本語を勉強していますが、仕事中はあまり日本語を話しませんし、日本人の友達もあまりいないので、あまり話す機会がありませんでした。Sailのおかげで、毎日日本人と話すことができ、彼らはとても親切で、日本語や日本での生活についてたくさんのことを教えてくれます。とても嬉しかったです。Sailは良いアプリで使いやすいと思います!Sailにはもっと多くの外国人や日本人の学生が増えて欲しいです。Sail、本当にありがとうございます!', imgSrc: 'public/assets/images/Cam_Vietnam.png' },
        { id: 2, name: 'Dianaさん', country: 'メキシコ', quote: '私は日本語を勉強する時間がありますが、一人で話しているだけでは少し物足りなさを感じていました。ある日、ネイティブの人と話せるアプリがないか調べてみたところ、Sailを見つけました。Sailは多くの点で私にとって素晴らしいものに思えました。なぜなら、年配の方だけでなく若い大人も雇用しており、多くの場所ではなかなか気にかけないことを行っているからです。そして、対応に関しては、これ以上の優しさを求めることはできないと思います。さらに、話す相手はとても魅力的な方々です。彼らと話すことで、私の文章が正しくなかった時に訂正してくれたり、語彙を広げてくれたりします。そして、彼らと話せば話すほど、私の言葉の選び方が改善されていきます。私にとって、彼らは単なるユーザーではなく、友人であり、敬意を持ってお互いを助け合う存在です。私のスペイン語に興味を持ってくれている人が多いのです。今は日本語での文章はあまり上手ではありませんが、少なくとも話す方は確実に上達しました。私は、強い意欲と忍耐があれば物事を成し遂げることができると信じている人間の一人です。そして、このアプリと既に作った友人たちのおかげで、日本に行く際に計画していることがうまくいくように、これからも日本語の勉強を続けていきます。別の問題があるかもしれませんが、コミュニケーションが原因ではないでしょう。心から、このような素晴らしい人々に出会える場を提供してくれた方々に感謝し、また、私に時間と忍耐をくれた友人にも感謝しています。', imgSrc: 'public/assets/images/Diana_Mexico.png' },
        { id: 3, name: 'Kazuさん', country: 'ペルー', quote: '私は日本で生まれ、子供の頃にペルーに来たので、日本や日本語については何も覚えていません。しかし、偶然にも家の近くに日本語学校があったので、日本語の勉強を始めました。日本語が大好きになり、今では勉強というよりも趣味になっています。しかし、ペルーでは話す機会があまりありませんでした。そして、たとえ話す機会があっても、上手く話せるかどうか緊張して自信がありませんでした。どうやって日本語を上達させるか考えていた時、NHKの番組で年配の日本人男性が外国人男性とビデオ通話をしているのを見ました。とても興味を持ちました。最初は会ったことのない人と話すのが不安でしたが、色々な人と話すうちに慣れていきました。私は趣味のある会話をし、友達もできました。この経験のおかげで、自分の日本語は大いに向上したと思います。今では、日常生活の話だけでなく、もっと深い話もできるようになりました。これからもSailで多くの人々と出会い、交流することを楽しみにしています。私の日本語能力のおかげで、仕事の機会や教育の機会にも恵まれ、本当に感謝しています。これからも努力を続ければ、もっと多くの目標や夢を達成できると信じています。', imgSrc: 'public/assets/images/Kazu_Peru.png' },
        { id: 4, name: 'Lizさん', country: '香港', quote: '私がSailを始めたのは2020年9月のことでした。日本にいる友人がこのアプリを教えてくれました。緊張しつつも興奮して、最初の会話を予約しました。その日から私の視野は広がりました。Sailを知る前は、主に教科書、NHKニュース、テレビ番組を通して日本語を勉強していました。N1には合格しましたが、日本語で話す機会はほとんどなく、アウトプットの経験はほとんどありませんでした。言語を学ぶ最も効果的な方法は、多く使うことです。人々が母国語を学ぶときは、日々のリスニング(インプット)と話すこと(アウトプット)を繰り返すことで上達していきます。Sailを使って日本人と様々な話題について話すと、自分のアウトプットに対するフィードバックをすぐに得ることができます。日本語を学ぶだけでなく、多くの日本人の友人もできました。私たちは日々の生活で見つけた幸せを共有し、お互いの悩みを聞き合っています。振り返ると、Sailは私の日常生活においてかけがえのない存在になっています。', imgSrc: 'public/assets/images/Liz_HongKong.png' },
        { id: 5, name: 'Omkarさん', country: 'インド', quote: '日本語は素晴らしい言語であり、私は精神的にも繋がりを感じています。日本人と話すとき、いつも日本の文化について新しい情報を得ることができます。また、日本のおもてなしの文化についても学びました。私が話してきた日本人の方々や、Sailのアプリのスタッフは家族のような存在です。この機会にとても感謝しています。', imgSrc: 'public/assets/images/Omkar_India.png' },
        { id: 6, name: 'Rosaさん', country: 'ベネズエラ', quote: 'このアプリのおかげで、私の日本語は大きくレベルアップしました。約10年間、自分で日本語を勉強してきましたが、話すスキルを練習したことはありませんでした。Sailでは、日本のさまざまな地域の人々(時には他の国の人々とも!)と知り合い、話す機会があります。これは、日本や他の国について学ぶ上で大きなメリットです。何か知りたいことがあるなら、その場所に住んでいる人に直接尋ねるのが一番です。スポーツ、音楽、アニメ、食べ物、趣味などの日常的なことについて話し、文化の違いを学ぶことができます。これは私が経験した中で最高のものの一つです。多くを学び、彼らと話すことを楽しんでいますし、自分の国や文化について少しでも紹介できることを嬉しく思います。', imgSrc: 'public/assets/images/Rosa_Venezuela.png' },
        { id: 7, name: 'Yukaさん', country: '台湾', quote: '私は友人からSailのことを教えてもらいました。Sailのおかげで、日本語を話す機会が増えました。日本語を話すとき、自信が増し、ますますリラックスできるようになりました。日本人に自分の考えを伝えることができるというのは、私の日本語学習のモチベーションであり、これは私が想像していた以上に得られたものです。私にとって、Sailは日本語を話す機会を増やしてくれるだけでなく、日本人の人生経験や知恵を学ぶ機会も与えてくれます。さらに、話しているうちに、自然と頭が日本語に切り替わり、私は日本語で話し続けるようになります。Sailで過ごす時間は、ストレスを解消する良い方法です。本当に素晴らしいです。日本の人々やSailのスタッフの皆様に心から感謝しています。引き続きご支援いただければ幸いです。', imgSrc: 'public/assets/images/Yuka_Taiwann.png' }
    ];
    const grid = document.getElementById('testimonials-grid');
    const modal = document.getElementById('testimonial-modal');
    const closeModalButton = document.getElementById('close-testimonial-modal');
    const modalImg = document.getElementById('modal-img');
    const modalQuote = document.getElementById('modal-quote');
    const modalName = document.getElementById('modal-name');
    const modalCountry = document.getElementById('modal-country');
    if (grid) {
        testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = `card-hover fade-in-up cursor-pointer`;
            card.style.transitionDelay = `${index * 100}ms`;
            card.setAttribute('data-id', testimonial.id);
            card.innerHTML = `<div class="relative"><img src="${testimonial.imgSrc}" alt="${testimonial.name}" class="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div><div class="absolute bottom-0 left-0 p-4 text-white"><h3 class="font-bold">${testimonial.name}</h3><p class="text-sm">${testimonial.country}</p></div></div>`;
            grid.appendChild(card);
        });
    }
    const openTestimonialModal = (data) => { if (data && modalImg && modalQuote && modalName && modalCountry && modal) { modalImg.src = data.imgSrc; modalQuote.textContent = `“${data.quote}”`; modalName.textContent = data.name; modalCountry.textContent = data.country; modal.classList.remove('hidden'); document.body.style.overflow = 'hidden'; } };
    const closeTestimonialModal = () => { if (modal) { modal.classList.add('hidden'); document.body.style.overflow = ''; } };
    if (grid) { grid.addEventListener('click', (e) => { const card = e.target.closest('.card-hover'); if (card) { const id = parseInt(card.getAttribute('data-id')); const data = testimonials.find(t => t.id === id); openTestimonialModal(data); } }); }
    if (closeModalButton) closeModalButton.addEventListener('click', closeTestimonialModal);
    if (modal) modal.addEventListener('click', (e) => e.target === modal && closeTestimonialModal());
    const exitIntentModal = document.getElementById('exit-intent-modal');
    const closeExitIntentButton = document.getElementById('close-exit-intent-modal');
    let isModalShown = sessionStorage.getItem('exit_intent_shown') === 'true';
    const showExitIntentModal = () => { if (!isModalShown && exitIntentModal) { exitIntentModal.classList.remove('hidden'); isModalShown = true; sessionStorage.setItem('exit_intent_shown', 'true'); } };
    const closeExitIntentModal = () => { if (exitIntentModal) exitIntentModal.classList.add('hidden'); };
    document.addEventListener('mouseleave', (e) => { if (e.clientY <= 0) showExitIntentModal(); });
    if (closeExitIntentButton) closeExitIntentButton.addEventListener('click', closeExitIntentModal);
    if (exitIntentModal) exitIntentModal.addEventListener('click', (e) => e.target === exitIntentModal && closeExitIntentModal());
    const cookieBanner = document.getElementById('cookie-consent-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    if (localStorage.getItem('cookie_consent') !== 'true' && cookieBanner) { setTimeout(() => { cookieBanner.classList.remove('hidden'); setTimeout(() => { cookieBanner.classList.remove('translate-y-[200%]'); }, 50); }, 1500); }
    if (acceptCookiesButton) { acceptCookiesButton.addEventListener('click', () => { localStorage.setItem('cookie_consent', 'true'); if (cookieBanner) { cookieBanner.classList.add('translate-y-[200%]'); setTimeout(() => { cookieBanner.classList.add('hidden'); }, 500); } }); }

    // --- ★ここからが新しい魔法の呪文です★ ---

    // 汎用的なIntersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // フェードイン要素を監視
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // ステップの線のアニメーション
    const stepLine = document.getElementById('step-line-path');
    const stepSection = document.getElementById('step-section');
    if(stepLine && stepSection){
        const stepObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                stepLine.classList.add('visible');
            }
        }, { threshold: 0.5 });
        stepObserver.observe(stepSection);
    }

    // ★新規追加: 数字のカウンターアップアニメーション
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        let current = 0;
                        const duration = 2000; // 2秒
                        
                        const updateCounter = () => {
                            const increment = target / (duration / 16);
                            current += increment;

                            if (current < target) {
                                counter.innerText = Math.ceil(current).toLocaleString();
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target.toLocaleString();
                            }
                        };
                        requestAnimationFrame(updateCounter);
                    });
                    observer.unobserve(entry.target); // 一度アニメーションしたら監視を停止
                }
            });
        }, { threshold: 0.5 });
        counterObserver.observe(statsSection);
    }

    // ★新規追加: 言語切り替えロジック
    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        const switchLanguage = (lang) => {
            const jaElements = document.querySelectorAll('.lang-ja');
            const enElements = document.querySelectorAll('.lang-en');
            
            if (lang === 'en') {
                jaElements.forEach(el => el.classList.add('hidden'));
                enElements.forEach(el => el.classList.remove('hidden'));
                if(langSwitch.type === 'checkbox') langSwitch.checked = true;
                localStorage.setItem('sail_lang', 'en');
                document.documentElement.lang = 'en';
            } else {
                enElements.forEach(el => el.classList.add('hidden'));
                jaElements.forEach(el => el.classList.remove('hidden'));
                if(langSwitch.type === 'checkbox') langSwitch.checked = false;
                localStorage.setItem('sail_lang', 'ja');
                document.documentElement.lang = 'ja';
            }
        };

        // 初期設定
        const savedLang = localStorage.getItem('sail_lang') || 'ja';
        switchLanguage(savedLang);

        // トグルイベント
        langSwitch.addEventListener('change', (e) => {
            switchLanguage(e.target.checked ? 'en' : 'ja');
        });
    }
});