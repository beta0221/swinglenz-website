/**
 * SwingLenz 語系切換
 *
 * 做法：
 * - 頁面預設的繁體中文文字直接寫在 HTML 裡（zh-Hant）。首次載入時，
 *   會把每個帶有 data-i18n / data-i18n-attr 標記的元素的原始文字擷取成「zh」版本。
 * - 其他語言（en、ja）的字典 DICT 只存放覆寫值，避免中文在兩處重複維護。
 * - 使用者的選擇記在 localStorage；首次造訪則依瀏覽器語言判斷。
 *
 * 新增可翻譯內容時：
 *   1. 在 HTML 元素加上 data-i18n="some.key"（文字內容）
 *      或 data-i18n-aria / data-i18n-alt（屬性）。
 *   2. 在下方每個語言字典補上對應翻譯（中文照常寫在 HTML，不需在此重複）。
 *
 * 新增語言時：
 *   1. 在 DICT 加一份字典、在 LANGS 加語言碼、在 HTML_LANG 加 <html lang> 對應值。
 *   2. 在 index.html 的 #langSelect 加一個 <option>。
 */

const EN = {
  "meta.description":
    "SwingLenz auto-detects your swing, records and trims the clip, plays it back in slow motion, and mirrors it live to a second device — so every rep gets seen.",

  "brand.aria": "SwingLenz home",
  "brand.alt": "SwingLenz logo",
  "nav.aria": "Primary navigation",
  "nav.features": "Features",
  "nav.experience": "Experience",

  "hero.h1": "See every swing, miss no detail.",
  "hero.text":
    "SwingLenz is an iPhone recording companion built for golf practice. It automatically detects your swing, starts recording, trims the clip, and plays it back instantly — so you can focus on the swing, not the shutter.",
  "hero.cta1": "Explore core features",
  "hero.cta2": "See the Pro experience",
  "hero.pointsAria": "Product highlights",
  "hero.point1": "AI auto-detects and records your swing",
  "hero.point2": "Instant library review and sharing",
  "hero.point3": "Wireless live replay across two devices",
  "hero.metricTop": "Auto-starts when a swing is detected",
  "hero.metricBottom": "Instant playback right after your swing",
  "hero.deviceAlt": "SwingLenz splash screen and brand visual",

  "stats.aria": "Product highlights summary",
  "stats.1.t": "No buttons",
  "stats.1.d": "From standby to recording, it takes over automatically.",
  "stats.2.t": "Last 20 clips",
  "stats.2.d": "Every swing is automatically saved to your library.",
  "stats.3.t": "240fps slow motion",
  "stats.3.d": "Zoom into impact and body rhythm.",
  "stats.4.t": "No Wi‑Fi needed",
  "stats.4.d": "Two-device replay works at outdoor ranges too.",

  "features.h2": "Not just a recorder — a complete practice flow.",
  "features.p":
    "From setting up your swing to reviewing and correcting it, SwingLenz strings every step into one smooth flow — making practice feel like training, not file management.",
  "features.c1.h": "AI captures every swing",
  "features.c1.p":
    "Once detection is on, recording starts automatically as you begin your swing and trims a complete clip when you finish — all without touching your phone.",
  "features.c2.h": "Review your library instantly",
  "features.c2.p":
    "Recent swing clips are saved automatically, with slow-motion playback and one-tap sharing to your coach or partners.",
  "features.c3.h": "Live two-device replay",
  "features.c3.p":
    "Place a second device by the tee and it automatically receives and plays your clip full-screen the moment you finish.",
  "features.c4.h": "Built for the range",
  "features.c4.p":
    "On first launch it requests camera, Bluetooth, and local network access, so it stays stable outdoors once connected.",

  "experience.h2": "A three-step rhythm designed for golf motion analysis.",
  "experience.s1.h": "Set up your phone, enter standby",
  "experience.s1.p":
    "Once the camera is in full-screen preview, the AI keeps detecting your swing posture, waiting for you to actually begin.",
  "experience.s2.h": "Records automatically as you swing",
  "experience.s2.p":
    "No countdown, no manual stop — the system captures the full swing at exactly the right moment.",
  "experience.s3.h": "Replay, compare, and correct instantly",
  "experience.s3.p":
    "Back in the library or in display mode, you can watch right after the shot, syncing muscle memory with the footage.",

  "pro.h2": "Upgrade for deeper analysis and faster feedback.",
  "pro.p":
    "Pro focuses on two things: seeing slower, and seeing faster. From 240fps slow motion to live two-device replay, it's all about making corrections more immediate.",
  "pro.panel1.h": "What you'll unlock",
  "pro.check1": "240fps slow-motion playback to zoom into impact",
  "pro.check2": "Two-device display mode that auto-receives and loops",
  "pro.check3": "Priority access to future advanced data and cloud features",
  "pro.panel2.h": "One films, one plays",
  "pro.panel2.p":
    "The Camera device captures your swing while the Display device stands by the tee to play it back. Take one step after your shot and you'll see the swing you just made.",

  "faq.h2": "A few questions you might have before starting.",
  "faq.q1.h": "Do I need an internet connection?",
  "faq.q1.p":
    "No. Two-device replay runs primarily over a local connection, so you can complete the core experience at an outdoor range.",
  "faq.q2.h": "Is this only a tool for coaches?",
  "faq.q2.p":
    "No. It fits everything from solo practice to teaching sessions — especially for golfers who want to cut out manual recording.",
  "faq.q3.h": "What permissions does it ask for on first launch?",
  "faq.q3.p":
    "Camera, Bluetooth, and local network — used for recording, two-device pairing, and live clip transfer respectively.",

  "cta.h2": "Turn every practice swing into something you can fix right away.",
  "cta.p":
    "SwingLenz trades minimal effort for the fastest feedback. Perfect right beside the hitting mat, and for teaching sessions that need steady review.",
  "cta.button": "Back to top",

  "footer.privacy": "Privacy Policy",
  "footer.support": "Support",
};

const JA = {
  "meta.description":
    "SwingLenzはAIがスイングを自動検出し、録画・トリミング、スロー再生、2台目デバイスへのライブミラーリングまで。すべての一振りを見逃しません。",

  "brand.aria": "SwingLenz ホーム",
  "brand.alt": "SwingLenz ロゴ",
  "nav.aria": "メインナビゲーション",
  "nav.features": "機能",
  "nav.experience": "体験",

  "hero.h1": "すべてのスイングを、細部まで見逃さない。",
  "hero.text":
    "SwingLenzはゴルフ練習のために作られたiPhone録画アシスタント。スイングを自動検出して録画を開始し、クリップをトリミングしてすぐに再生。シャッターではなく、スイングに集中できます。",
  "hero.cta1": "主な機能を見る",
  "hero.cta2": "Pro体験を見る",
  "hero.pointsAria": "製品のポイント",
  "hero.point1": "AIがスイングを自動検出して録画",
  "hero.point2": "ライブラリですぐに振り返り・共有",
  "hero.point3": "2台のデバイスでワイヤレス・ライブ再生",
  "hero.metricTop": "スイングを検出すると自動でスタート",
  "hero.metricBottom": "スイング直後にすぐ再生",
  "hero.deviceAlt": "SwingLenzのスプラッシュ画面とブランドビジュアル",

  "stats.aria": "製品の特長まとめ",
  "stats.1.t": "ボタン操作不要",
  "stats.1.d": "待機から録画まで自動で引き継ぎます。",
  "stats.2.t": "直近20本のクリップ",
  "stats.2.d": "すべてのスイングが自動でライブラリに保存されます。",
  "stats.3.t": "240fpsスロー",
  "stats.3.d": "インパクトの瞬間と体のリズムを拡大。",
  "stats.4.t": "Wi‑Fi不要",
  "stats.4.d": "屋外の練習場でも2台で再生できます。",

  "features.h2": "録画ツールではなく、より完成された練習フローへ。",
  "features.p":
    "スイングの準備から振り返り・修正まで、SwingLenzはすべての体験を一つのなめらかな流れにつなぎます。素材整理ではなく、トレーニングのような練習に。",
  "features.c1.h": "AIが一振りごとに自動キャプチャ",
  "features.c1.p":
    "検出をオンにすると、スイング動作に入った瞬間に自動で録画を開始し、終了後に完全なクリップをトリミング。手元の操作は一切不要です。",
  "features.c2.h": "ライブラリですぐに振り返り",
  "features.c2.p":
    "直近のスイングクリップは自動保存。スロー再生に対応し、コーチや仲間へワンタップで共有できます。",
  "features.c3.h": "2台のデバイスでライブ再生",
  "features.c3.p":
    "2台目のデバイスをティーの横に置けば、スイング完了と同時に映像を自動受信してフルスクリーン再生します。",
  "features.c4.h": "練習場での使用を最優先",
  "features.c4.p":
    "初回起動時にカメラ・Bluetooth・ローカルネットワークの権限をリクエスト。接続後は屋外でも安定して使えます。",

  "experience.h2": "ゴルフの動作分析のために設計された3ステップのリズム。",
  "experience.s1.h": "スマホをセットして待機",
  "experience.s1.p":
    "カメラがフルスクリーンプレビューになると、AIがスイング姿勢を検出し続け、あなたが実際に動き始めるのを待ちます。",
  "experience.s2.h": "スイングの瞬間に自動録画",
  "experience.s2.p":
    "カウントダウンも手動停止も不要。システムが最適なタイミングで完全なスイングをキャプチャします。",
  "experience.s3.h": "すぐに再生・比較・修正",
  "experience.s3.p":
    "ライブラリに戻るか表示モードに切り替えれば、打った直後に確認でき、体の記憶と映像情報を同期できます。",

  "pro.h2": "より深い分析と、より速いフィードバックを求める方へ。",
  "pro.p":
    "Proが重視するのは2つ。もっとスローに見ること、そしてもっと速く見ること。240fpsスローから2台でのライブ再生まで、修正をより即時にするためのものです。",
  "pro.panel1.h": "解放される機能",
  "pro.check1": "240fpsスロー再生でインパクトを拡大",
  "pro.check2": "2台表示モードで自動受信・ループ再生",
  "pro.check3": "今後の高度なデータ・クラウド機能を優先開放",
  "pro.panel2.h": "1台で撮り、1台で再生",
  "pro.panel2.p":
    "Cameraデバイスがスイングを捉え、Displayデバイスがティーの横で再生を担当。打った後に一歩進めば、今のスイングをそのまま確認できます。",

  "faq.h2": "使う前に気になるいくつかの質問。",
  "faq.q1.h": "ネット接続は必須ですか？",
  "faq.q1.p":
    "いいえ。2台での再生は主にローカル接続で動作するため、屋外の練習場でもコア体験を完結できます。",
  "faq.q2.h": "コーチ専用のツールですか？",
  "faq.q2.p":
    "いいえ。自主練習から指導の現場まで幅広く対応。特に手動録画の手間を減らしたいゴルファーに最適です。",
  "faq.q3.h": "初回起動でどんな権限を求められますか？",
  "faq.q3.p":
    "カメラ・Bluetooth・ローカルネットワークです。それぞれ録画、2台のペアリング、クリップのリアルタイム送信に使用します。",

  "cta.h2": "練習の一振りを、すぐ修正できる情報に変える。",
  "cta.p":
    "SwingLenzは最小限の操作で最速のフィードバックを。打席のすぐ横での使用にも、安定した振り返りが必要な指導現場にも最適です。",
  "cta.button": "トップに戻る",

  "footer.privacy": "プライバシーポリシー",
  "footer.support": "サポート",
};

const DE = {
  "meta.description":
    "SwingLenz erkennt deinen Schwung automatisch, nimmt ihn auf und schneidet den Clip zu, spielt ihn in Zeitlupe ab und spiegelt ihn live auf ein zweites Gerät – damit jeder Schlag gesehen wird.",

  "brand.aria": "SwingLenz Startseite",
  "brand.alt": "SwingLenz Logo",
  "nav.aria": "Hauptnavigation",
  "nav.features": "Funktionen",
  "nav.experience": "Erlebnis",

  "hero.h1": "Jeden Schwung sehen, kein Detail verpassen.",
  "hero.text":
    "SwingLenz ist ein iPhone-Aufnahmebegleiter für das Golftraining. Er erkennt deinen Schwung automatisch, startet die Aufnahme, schneidet den Clip zu und spielt ihn sofort ab – damit du dich auf den Schwung konzentrierst, nicht auf den Auslöser.",
  "hero.cta1": "Kernfunktionen entdecken",
  "hero.cta2": "Das Pro-Erlebnis ansehen",
  "hero.pointsAria": "Produkt-Highlights",
  "hero.point1": "KI erkennt und nimmt deinen Schwung automatisch auf",
  "hero.point2": "Sofortige Wiedergabe und Teilen aus der Mediathek",
  "hero.point3": "Drahtlose Live-Wiedergabe über zwei Geräte",
  "hero.metricTop": "Startet automatisch, sobald ein Schwung erkannt wird",
  "hero.metricBottom": "Sofortige Wiedergabe direkt nach deinem Schwung",
  "hero.deviceAlt": "SwingLenz Startbildschirm und Markendesign",

  "stats.aria": "Zusammenfassung der Produkt-Highlights",
  "stats.1.t": "Keine Tasten",
  "stats.1.d": "Vom Standby bis zur Aufnahme übernimmt es automatisch.",
  "stats.2.t": "Letzte 20 Clips",
  "stats.2.d": "Jeder Schwung wird automatisch in deiner Mediathek gespeichert.",
  "stats.3.t": "240fps Zeitlupe",
  "stats.3.d": "Zoome in den Treffmoment und den Körperrhythmus.",
  "stats.4.t": "Kein WLAN nötig",
  "stats.4.d": "Die Zwei-Geräte-Wiedergabe funktioniert auch auf Außenplätzen.",

  "features.h2": "Kein Aufnahmetool, sondern ein kompletter Trainingsablauf.",
  "features.p":
    "Vom Vorbereiten deines Schwungs bis zum Auswerten und Korrigieren fügt SwingLenz jeden Schritt zu einem flüssigen Ablauf zusammen – damit sich Training wie Training anfühlt und nicht wie Dateiverwaltung.",
  "features.c1.h": "KI erfasst jeden Schwung",
  "features.c1.p":
    "Sobald die Erkennung aktiv ist, startet die Aufnahme automatisch, wenn du deinen Schwung beginnst, und schneidet beim Beenden einen vollständigen Clip zu – ganz ohne dein Handy zu berühren.",
  "features.c2.h": "Mediathek sofort durchsehen",
  "features.c2.p":
    "Aktuelle Schwung-Clips werden automatisch gespeichert, mit Zeitlupenwiedergabe und Teilen per Fingertipp an Trainer oder Partner.",
  "features.c3.h": "Live-Wiedergabe auf zwei Geräten",
  "features.c3.p":
    "Stelle ein zweites Gerät neben das Tee, und es empfängt und spielt deinen Clip im Vollbild ab, sobald du fertig bist.",
  "features.c4.h": "Für die Driving Range gemacht",
  "features.c4.p":
    "Beim ersten Start fragt es nach Kamera-, Bluetooth- und lokalem Netzwerkzugriff, damit es im Freien nach der Verbindung stabil läuft.",

  "experience.h2": "Ein Drei-Schritte-Rhythmus für die Golf-Bewegungsanalyse.",
  "experience.s1.h": "Handy aufstellen, in den Standby gehen",
  "experience.s1.p":
    "Sobald die Kamera in der Vollbildvorschau ist, erkennt die KI weiterhin deine Schwunghaltung und wartet, bis du wirklich beginnst.",
  "experience.s2.h": "Nimmt automatisch beim Schwung auf",
  "experience.s2.p":
    "Kein Countdown, kein manuelles Stoppen – das System erfasst den gesamten Schwung genau im richtigen Moment.",
  "experience.s3.h": "Sofort wiedergeben, vergleichen und korrigieren",
  "experience.s3.p":
    "Zurück in der Mediathek oder im Anzeigemodus kannst du direkt nach dem Schlag zusehen und Muskelgedächtnis mit dem Filmmaterial abgleichen.",

  "pro.h2": "Upgrade für tiefere Analyse und schnelleres Feedback.",
  "pro.p":
    "Pro konzentriert sich auf zwei Dinge: langsamer sehen und schneller sehen. Von 240fps-Zeitlupe bis zur Live-Wiedergabe auf zwei Geräten – alles, um Korrekturen unmittelbarer zu machen.",
  "pro.panel1.h": "Das schaltest du frei",
  "pro.check1": "240fps-Zeitlupenwiedergabe zum Heranzoomen an den Treffmoment",
  "pro.check2": "Zwei-Geräte-Anzeigemodus, der automatisch empfängt und in Schleife abspielt",
  "pro.check3": "Vorrangiger Zugang zu künftigen erweiterten Daten- und Cloud-Funktionen",
  "pro.panel2.h": "Eins filmt, eins spielt ab",
  "pro.panel2.p":
    "Das Camera-Gerät erfasst deinen Schwung, während das Display-Gerät neben dem Tee die Wiedergabe übernimmt. Mach nach deinem Schlag einen Schritt – und du siehst den Schwung, den du gerade gemacht hast.",

  "faq.h2": "Ein paar Fragen, die du vor dem Start haben könntest.",
  "faq.q1.h": "Brauche ich eine Internetverbindung?",
  "faq.q1.p":
    "Nein. Die Zwei-Geräte-Wiedergabe läuft hauptsächlich über eine lokale Verbindung, sodass du das Kernerlebnis auch auf einer Außenanlage abschließen kannst.",
  "faq.q2.h": "Ist das nur ein Tool für Trainer?",
  "faq.q2.p":
    "Nein. Es passt von Eigentraining bis zum Unterricht – besonders für Golfer, die manuelles Aufnehmen vermeiden möchten.",
  "faq.q3.h": "Welche Berechtigungen fragt es beim ersten Start ab?",
  "faq.q3.p":
    "Kamera, Bluetooth und lokales Netzwerk – jeweils für Aufnahme, Geräte-Kopplung und die Live-Übertragung von Clips.",

  "cta.h2": "Mach aus jedem Übungsschwung etwas, das du sofort korrigieren kannst.",
  "cta.p":
    "SwingLenz tauscht minimalen Aufwand gegen schnellstes Feedback. Perfekt direkt neben der Abschlagmatte und für Unterrichtsstunden, die eine stabile Auswertung brauchen.",
  "cta.button": "Nach oben",

  "footer.privacy": "Datenschutzrichtlinie",
  "footer.support": "Support",
};

const FR = {
  "meta.description":
    "SwingLenz détecte automatiquement votre swing, l'enregistre et recadre le clip, le rejoue au ralenti et le diffuse en direct sur un second appareil — pour que chaque coup soit vu.",

  "brand.aria": "Accueil SwingLenz",
  "brand.alt": "Logo SwingLenz",
  "nav.aria": "Navigation principale",
  "nav.features": "Fonctions",
  "nav.experience": "Expérience",

  "hero.h1": "Voir chaque swing, sans manquer aucun détail.",
  "hero.text":
    "SwingLenz est un compagnon d'enregistrement iPhone conçu pour l'entraînement au golf. Il détecte automatiquement votre swing, lance l'enregistrement, recadre le clip et le rejoue instantanément — pour que vous vous concentriez sur le swing, pas sur le déclencheur.",
  "hero.cta1": "Découvrir les fonctions clés",
  "hero.cta2": "Voir l'expérience Pro",
  "hero.pointsAria": "Points forts du produit",
  "hero.point1": "L'IA détecte et enregistre automatiquement votre swing",
  "hero.point2": "Revue et partage instantanés depuis la bibliothèque",
  "hero.point3": "Relecture en direct sans fil sur deux appareils",
  "hero.metricTop": "Démarre automatiquement dès qu'un swing est détecté",
  "hero.metricBottom": "Lecture instantanée juste après votre swing",
  "hero.deviceAlt": "Écran de démarrage et visuel de marque SwingLenz",

  "stats.aria": "Résumé des points forts du produit",
  "stats.1.t": "Sans bouton",
  "stats.1.d": "De la veille à l'enregistrement, il prend le relais automatiquement.",
  "stats.2.t": "20 derniers clips",
  "stats.2.d": "Chaque swing est automatiquement enregistré dans votre bibliothèque.",
  "stats.3.t": "Ralenti 240 fps",
  "stats.3.d": "Zoomez sur l'impact et le rythme du corps.",
  "stats.4.t": "Sans Wi‑Fi",
  "stats.4.d": "La relecture à deux appareils fonctionne aussi sur les practices en plein air.",

  "features.h2": "Pas un simple enregistreur, mais un flux d'entraînement complet.",
  "features.p":
    "De la préparation de votre swing à sa revue et sa correction, SwingLenz relie chaque étape en un flux fluide — pour que l'entraînement ressemble à de l'entraînement, pas à de la gestion de fichiers.",
  "features.c1.h": "L'IA capture chaque swing",
  "features.c1.p":
    "Une fois la détection activée, l'enregistrement démarre automatiquement quand vous commencez votre swing et recadre un clip complet à la fin — sans jamais toucher votre téléphone.",
  "features.c2.h": "Revoyez votre bibliothèque instantanément",
  "features.c2.p":
    "Les clips récents sont enregistrés automatiquement, avec lecture au ralenti et partage en un geste à votre coach ou vos partenaires.",
  "features.c3.h": "Relecture en direct sur deux appareils",
  "features.c3.p":
    "Placez un second appareil près du tee : il reçoit et lit votre clip en plein écran dès que vous avez terminé.",
  "features.c4.h": "Pensé pour le practice",
  "features.c4.p":
    "Au premier lancement, il demande l'accès à la caméra, au Bluetooth et au réseau local, pour rester stable en extérieur une fois connecté.",

  "experience.h2": "Un rythme en trois étapes conçu pour l'analyse du mouvement de golf.",
  "experience.s1.h": "Installez votre téléphone, passez en veille",
  "experience.s1.p":
    "Une fois la caméra en aperçu plein écran, l'IA continue de détecter votre posture de swing et attend que vous commenciez vraiment.",
  "experience.s2.h": "Enregistre automatiquement pendant le swing",
  "experience.s2.p":
    "Pas de compte à rebours, pas d'arrêt manuel — le système capture le swing complet au bon moment.",
  "experience.s3.h": "Rejouez, comparez et corrigez instantanément",
  "experience.s3.p":
    "De retour dans la bibliothèque ou en mode affichage, vous pouvez regarder juste après le coup, synchronisant mémoire musculaire et images.",

  "pro.h2": "Passez à la vitesse supérieure pour une analyse plus poussée et un retour plus rapide.",
  "pro.p":
    "Pro se concentre sur deux choses : voir plus lentement et voir plus vite. Du ralenti à 240 fps à la relecture en direct sur deux appareils, tout vise à rendre les corrections plus immédiates.",
  "pro.panel1.h": "Ce que vous débloquez",
  "pro.check1": "Lecture au ralenti 240 fps pour zoomer sur l'impact",
  "pro.check2": "Mode affichage à deux appareils qui reçoit et boucle automatiquement",
  "pro.check3": "Accès prioritaire aux futures fonctions de données avancées et cloud",
  "pro.panel2.h": "L'un filme, l'autre rejoue",
  "pro.panel2.p":
    "L'appareil Camera capture votre swing tandis que l'appareil Display, près du tee, en assure la lecture. Faites un pas après votre coup et vous verrez le swing que vous venez de faire.",

  "faq.h2": "Quelques questions que vous pourriez vous poser avant de commencer.",
  "faq.q1.h": "Ai-je besoin d'une connexion Internet ?",
  "faq.q1.p":
    "Non. La relecture à deux appareils fonctionne principalement via une connexion locale, vous pouvez donc vivre l'expérience principale sur un practice en plein air.",
  "faq.q2.h": "Est-ce un outil réservé aux coachs ?",
  "faq.q2.p":
    "Non. Il convient de l'entraînement individuel aux séances d'enseignement — surtout pour les golfeurs qui veulent éviter l'enregistrement manuel.",
  "faq.q3.h": "Quelles autorisations demande-t-il au premier lancement ?",
  "faq.q3.p":
    "Caméra, Bluetooth et réseau local — utilisés respectivement pour l'enregistrement, l'appairage des deux appareils et le transfert des clips en direct.",

  "cta.h2": "Transformez chaque swing d'entraînement en information à corriger aussitôt.",
  "cta.p":
    "SwingLenz échange un effort minimal contre le retour le plus rapide. Parfait juste à côté du tapis de frappe, et pour les séances d'enseignement qui exigent une revue stable.",
  "cta.button": "Retour en haut",

  "footer.privacy": "Politique de confidentialité",
  "footer.support": "Assistance",
};

const ES = {
  "meta.description":
    "SwingLenz detecta tu swing automáticamente, lo graba y recorta el clip, lo reproduce a cámara lenta y lo refleja en vivo en un segundo dispositivo, para que cada golpe se vea.",

  "brand.aria": "Inicio de SwingLenz",
  "brand.alt": "Logotipo de SwingLenz",
  "nav.aria": "Navegación principal",
  "nav.features": "Funciones",
  "nav.experience": "Experiencia",

  "hero.h1": "Ve cada swing, sin perder ningún detalle.",
  "hero.text":
    "SwingLenz es un asistente de grabación para iPhone creado para la práctica del golf. Detecta tu swing automáticamente, inicia la grabación, recorta el clip y lo reproduce al instante, para que te concentres en el swing y no en el obturador.",
  "hero.cta1": "Explorar funciones clave",
  "hero.cta2": "Ver la experiencia Pro",
  "hero.pointsAria": "Aspectos destacados del producto",
  "hero.point1": "La IA detecta y graba tu swing automáticamente",
  "hero.point2": "Revisión y uso compartido instantáneos desde la biblioteca",
  "hero.point3": "Repetición en vivo inalámbrica entre dos dispositivos",
  "hero.metricTop": "Se inicia automáticamente al detectar un swing",
  "hero.metricBottom": "Reproducción instantánea justo después de tu swing",
  "hero.deviceAlt": "Pantalla de inicio e imagen de marca de SwingLenz",

  "stats.aria": "Resumen de aspectos destacados del producto",
  "stats.1.t": "Sin botones",
  "stats.1.d": "Del modo de espera a la grabación, se encarga automáticamente.",
  "stats.2.t": "Últimos 20 clips",
  "stats.2.d": "Cada swing se guarda automáticamente en tu biblioteca.",
  "stats.3.t": "Cámara lenta a 240 fps",
  "stats.3.d": "Acércate al momento del impacto y al ritmo del cuerpo.",
  "stats.4.t": "Sin Wi‑Fi",
  "stats.4.d": "La repetición en dos dispositivos también funciona en campos al aire libre.",

  "features.h2": "No es una herramienta de grabación, sino un flujo de práctica completo.",
  "features.p":
    "Desde preparar tu swing hasta revisarlo y corregirlo, SwingLenz une cada paso en un flujo fluido, para que practicar se sienta como entrenar y no como ordenar archivos.",
  "features.c1.h": "La IA captura cada swing",
  "features.c1.p":
    "Con la detección activada, la grabación se inicia automáticamente cuando empiezas tu swing y recorta un clip completo al terminar, sin tocar el teléfono.",
  "features.c2.h": "Revisa tu biblioteca al instante",
  "features.c2.p":
    "Los clips recientes se guardan automáticamente, con reproducción a cámara lenta y uso compartido con un toque para tu entrenador o compañeros.",
  "features.c3.h": "Repetición en vivo en dos dispositivos",
  "features.c3.p":
    "Coloca un segundo dispositivo junto al tee y recibirá y reproducirá tu clip a pantalla completa en cuanto termines.",
  "features.c4.h": "Pensado para el campo de prácticas",
  "features.c4.p":
    "En el primer inicio solicita acceso a la cámara, el Bluetooth y la red local, para mantenerse estable al aire libre una vez conectado.",

  "experience.h2": "Un ritmo de tres pasos diseñado para el análisis del movimiento de golf.",
  "experience.s1.h": "Coloca el teléfono y entra en espera",
  "experience.s1.p":
    "Cuando la cámara está en vista previa a pantalla completa, la IA sigue detectando tu postura de swing y espera a que realmente empieces.",
  "experience.s2.h": "Graba automáticamente al hacer el swing",
  "experience.s2.p":
    "Sin cuenta atrás ni parada manual: el sistema captura el swing completo justo en el momento adecuado.",
  "experience.s3.h": "Repite, compara y corrige al instante",
  "experience.s3.p":
    "De vuelta en la biblioteca o en el modo de visualización, puedes verlo justo después del golpe, sincronizando la memoria muscular con las imágenes.",

  "pro.h2": "Mejora para un análisis más profundo y una respuesta más rápida.",
  "pro.p":
    "Pro se centra en dos cosas: ver más lento y ver más rápido. Desde la cámara lenta a 240 fps hasta la repetición en vivo en dos dispositivos, todo busca que las correcciones sean más inmediatas.",
  "pro.panel1.h": "Lo que vas a desbloquear",
  "pro.check1": "Reproducción a cámara lenta de 240 fps para acercarte al impacto",
  "pro.check2": "Modo de visualización en dos dispositivos que recibe y repite automáticamente",
  "pro.check3": "Acceso prioritario a futuras funciones avanzadas de datos y en la nube",
  "pro.panel2.h": "Uno graba, otro reproduce",
  "pro.panel2.p":
    "El dispositivo Camera captura tu swing mientras el dispositivo Display, junto al tee, se encarga de reproducirlo. Da un paso tras tu golpe y verás el swing que acabas de hacer.",

  "faq.h2": "Algunas preguntas que podrías tener antes de empezar.",
  "faq.q1.h": "¿Necesito conexión a Internet?",
  "faq.q1.p":
    "No. La repetición en dos dispositivos funciona principalmente por conexión local, así que puedes completar la experiencia principal en un campo al aire libre.",
  "faq.q2.h": "¿Es solo una herramienta para entrenadores?",
  "faq.q2.p":
    "No. Sirve desde la práctica individual hasta las clases, especialmente para golfistas que quieren evitar la grabación manual.",
  "faq.q3.h": "¿Qué permisos pide en el primer inicio?",
  "faq.q3.p":
    "Cámara, Bluetooth y red local, usados respectivamente para grabar, emparejar los dos dispositivos y transferir los clips en vivo.",

  "cta.h2": "Convierte cada swing de práctica en información que puedas corregir al instante.",
  "cta.p":
    "SwingLenz cambia un esfuerzo mínimo por la respuesta más rápida. Perfecto junto a la alfombra de golpeo y para las clases que necesitan una revisión estable.",
  "cta.button": "Volver arriba",

  "footer.privacy": "Política de privacidad",
  "footer.support": "Soporte",
};

const PT = {
  "meta.description":
    "O SwingLenz detecta seu swing automaticamente, grava e recorta o clipe, reproduz em câmera lenta e o espelha ao vivo em um segundo dispositivo — para que cada tacada seja vista.",

  "brand.aria": "Início do SwingLenz",
  "brand.alt": "Logotipo do SwingLenz",
  "nav.aria": "Navegação principal",
  "nav.features": "Recursos",
  "nav.experience": "Experiência",

  "hero.h1": "Veja cada swing, sem perder nenhum detalhe.",
  "hero.text":
    "O SwingLenz é um assistente de gravação para iPhone feito para o treino de golfe. Ele detecta seu swing automaticamente, inicia a gravação, recorta o clipe e o reproduz na hora — para você focar no swing, e não no botão.",
  "hero.cta1": "Explorar os recursos principais",
  "hero.cta2": "Ver a experiência Pro",
  "hero.pointsAria": "Destaques do produto",
  "hero.point1": "A IA detecta e grava seu swing automaticamente",
  "hero.point2": "Revisão e compartilhamento instantâneos na biblioteca",
  "hero.point3": "Replay ao vivo sem fios entre dois dispositivos",
  "hero.metricTop": "Inicia automaticamente ao detectar um swing",
  "hero.metricBottom": "Reprodução instantânea logo após seu swing",
  "hero.deviceAlt": "Tela de abertura e identidade visual do SwingLenz",

  "stats.aria": "Resumo dos destaques do produto",
  "stats.1.t": "Sem botões",
  "stats.1.d": "Do modo de espera à gravação, ele assume automaticamente.",
  "stats.2.t": "Últimos 20 clipes",
  "stats.2.d": "Cada swing é salvo automaticamente na sua biblioteca.",
  "stats.3.t": "Câmera lenta de 240 fps",
  "stats.3.d": "Aproxime o momento do impacto e o ritmo do corpo.",
  "stats.4.t": "Sem Wi‑Fi",
  "stats.4.d": "O replay em dois dispositivos também funciona em campos ao ar livre.",

  "features.h2": "Não é uma ferramenta de gravação, mas um fluxo de treino completo.",
  "features.p":
    "Da preparação do swing à revisão e correção, o SwingLenz une cada etapa em um fluxo contínuo — para que treinar pareça treino, e não organização de arquivos.",
  "features.c1.h": "A IA captura cada swing",
  "features.c1.p":
    "Com a detecção ativada, a gravação começa automaticamente quando você inicia o swing e recorta um clipe completo ao terminar — sem tocar no telefone.",
  "features.c2.h": "Revise sua biblioteca na hora",
  "features.c2.p":
    "Os clipes recentes são salvos automaticamente, com reprodução em câmera lenta e compartilhamento com um toque para seu treinador ou parceiros.",
  "features.c3.h": "Replay ao vivo em dois dispositivos",
  "features.c3.p":
    "Coloque um segundo dispositivo ao lado do tee e ele recebe e reproduz seu clipe em tela cheia assim que você terminar.",
  "features.c4.h": "Feito para o campo de prática",
  "features.c4.p":
    "No primeiro uso, ele solicita acesso à câmera, ao Bluetooth e à rede local, para se manter estável ao ar livre depois de conectado.",

  "experience.h2": "Um ritmo de três passos pensado para a análise do movimento no golfe.",
  "experience.s1.h": "Posicione o telefone e entre em espera",
  "experience.s1.p":
    "Quando a câmera está na pré-visualização em tela cheia, a IA continua detectando sua postura de swing e aguarda você começar de fato.",
  "experience.s2.h": "Grava automaticamente durante o swing",
  "experience.s2.p":
    "Sem contagem regressiva nem parada manual — o sistema captura o swing completo no momento certo.",
  "experience.s3.h": "Reproduza, compare e corrija na hora",
  "experience.s3.p":
    "De volta à biblioteca ou no modo de exibição, você pode assistir logo após a tacada, sincronizando memória muscular e imagens.",

  "pro.h2": "Faça o upgrade para uma análise mais profunda e um feedback mais rápido.",
  "pro.p":
    "O Pro foca em duas coisas: ver mais devagar e ver mais rápido. Da câmera lenta de 240 fps ao replay ao vivo em dois dispositivos, tudo para tornar as correções mais imediatas.",
  "pro.panel1.h": "O que você vai desbloquear",
  "pro.check1": "Reprodução em câmera lenta de 240 fps para aproximar o impacto",
  "pro.check2": "Modo de exibição em dois dispositivos que recebe e repete automaticamente",
  "pro.check3": "Acesso prioritário a futuros recursos avançados de dados e nuvem",
  "pro.panel2.h": "Um filma, outro reproduz",
  "pro.panel2.p":
    "O dispositivo Camera captura seu swing enquanto o dispositivo Display, ao lado do tee, faz a reprodução. Dê um passo após a tacada e você verá o swing que acabou de fazer.",

  "faq.h2": "Algumas perguntas que você pode ter antes de começar.",
  "faq.q1.h": "Preciso de conexão com a internet?",
  "faq.q1.p":
    "Não. O replay em dois dispositivos funciona principalmente por conexão local, então você pode concluir a experiência principal em um campo ao ar livre.",
  "faq.q2.h": "É uma ferramenta só para treinadores?",
  "faq.q2.p":
    "Não. Serve do treino individual às aulas — especialmente para golfistas que querem evitar a gravação manual.",
  "faq.q3.h": "Quais permissões ele pede no primeiro uso?",
  "faq.q3.p":
    "Câmera, Bluetooth e rede local — usados respectivamente para gravação, pareamento dos dois dispositivos e transferência de clipes ao vivo.",

  "cta.h2": "Transforme cada swing de treino em informação que você pode corrigir na hora.",
  "cta.p":
    "O SwingLenz troca esforço mínimo pelo feedback mais rápido. Perfeito ao lado do tapete de batida e para aulas que precisam de uma revisão estável.",
  "cta.button": "Voltar ao topo",

  "footer.privacy": "Política de Privacidade",
  "footer.support": "Suporte",
};

// 非預設語言的字典（預設 zh 由 HTML 擷取，不在此）
const DICT = { en: EN, ja: JA, de: DE, fr: FR, es: ES, pt: PT };

// 支援的語言碼，以及對應的 <html lang> 值
const LANGS = ["zh", "en", "ja", "de", "fr", "es", "pt"];
const HTML_LANG = {
  zh: "zh-Hant",
  en: "en",
  ja: "ja",
  de: "de",
  fr: "fr",
  es: "es",
  pt: "pt",
};

const STORAGE_KEY = "swinglenz-lang";

// data-i18n-* 屬性對應的實際 DOM 屬性
const ATTR_MAP = {
  aria: "aria-label",
  alt: "alt",
};

// 擷取自 HTML 的原始繁中內容，鍵為 i18n key，值為 { text, attrs:{...} }
const ZH = {};

/** 取得某 key 的繁中原文（kind 指定時取屬性版本）。 */
function zh(key, kind) {
  const entry = ZH[key];
  if (!entry) return "";
  if (kind && entry.attrs) return entry.attrs[kind] ?? "";
  return entry.text ?? "";
}

/** 翻譯某 key 到指定語言；缺翻譯時回退繁中。 */
function translate(key, lang, kind) {
  if (lang === "zh") return zh(key, kind);
  return DICT[lang]?.[key] ?? zh(key, kind);
}

/** 首次載入時，把 HTML 內現有的繁中文字 / 屬性收集起來。 */
function captureZh() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key === "meta.description") {
      (ZH[key] ||= {}).text = el.getAttribute("content").trim();
    } else {
      (ZH[key] ||= {}).text = el.textContent.trim();
    }
  });

  Object.keys(ATTR_MAP).forEach((kind) => {
    document.querySelectorAll(`[data-i18n-${kind}]`).forEach((el) => {
      const key = el.getAttribute(`data-i18n-${kind}`);
      const entry = (ZH[key] ||= {});
      (entry.attrs ||= {})[kind] = el.getAttribute(ATTR_MAP[kind]) || "";
    });
  });
}

/** 套用指定語系到整個頁面。 */
function applyLang(lang) {
  if (!LANGS.includes(lang)) lang = "zh";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translate(key, lang);
    if (key === "meta.description") {
      el.setAttribute("content", value);
    } else {
      el.textContent = value;
    }
  });

  Object.entries(ATTR_MAP).forEach(([kind, attr]) => {
    document.querySelectorAll(`[data-i18n-${kind}]`).forEach((el) => {
      const key = el.getAttribute(`data-i18n-${kind}`);
      el.setAttribute(attr, translate(key, lang, kind));
    });
  });

  document.documentElement.lang = HTML_LANG[lang];

  const select = document.getElementById("langSelect");
  if (select && select.value !== lang) select.value = lang;

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) {
    /* localStorage 不可用時忽略 */
  }
}

/** 決定初始語系：已儲存 > 瀏覽器語言 > 預設繁中。 */
function initialLang() {
  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (_) {
    /* 忽略 */
  }
  if (LANGS.includes(stored)) return stored;

  const nav = (navigator.language || "").toLowerCase();
  const base = nav.split("-")[0];
  if (base === "zh") return "zh";
  if (LANGS.includes(base)) return base;
  return "en";
}

function init() {
  captureZh();
  applyLang(initialLang());

  const select = document.getElementById("langSelect");
  if (select) {
    select.addEventListener("change", (e) => applyLang(e.target.value));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
