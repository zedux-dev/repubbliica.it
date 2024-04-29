<?php
    $json = [
        "title" => "la Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport",
        "description" => "Repubblica è il quotidiano online aggiornato 24 ore su 24 su politica, cronaca, economia, sport, esteri, spettacoli, musica, cultura, scienza, tecnologia.",
        "image" => "https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png",
        "thumb" => "https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png",
        "url" => "https://www.repubbliica.it/",
    ];

    if(count(explode("/", $_SERVER["REQUEST_URI"])) == 7) {
        $url = "https://repubbliica.it:3000/get-news-detail";
        
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        
        $headers = array("Content-Type: application/x-www-form-urlencoded",);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        
        $data = "url=" . urlencode($_SERVER["REQUEST_URI"]);
        
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        
        $resp = curl_exec($curl);
        curl_close($curl);    
    
        $tmp = json_decode($resp, true)["data"];

        $json["title"] = $tmp["title"];
        $json["description"] = $tmp["subtitle"];
        $json["image"] = $tmp["image"];
        $json["thumb"] = $tmp["thumb"];
        $json["url"] = "https://repubbliica.it/cronaca/" . date("Y/m/d", strtotime($tmp["date"])) . "/news/" . $tmp["slug"];
    }
?>

<!doctype html>
<html lang="en">

<head>
    <title><?php echo $json["title"]; ?></title>
    <meta name="description" content="<?php echo $json["description"]; ?>" />
    <meta property="og:site_name" content="la Repubblica" />
    <meta property="og:title" content="<?php echo $json["title"]; ?>" />
    <meta property="og:description" content="<?php echo $json["description"]; ?>" />
    <meta property="og:image" content="<?php echo $json["thumb"]; ?>" />
    <meta property="og:url" content="<?php echo $json["url"]; ?>" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@repubblica" />
    <meta name="twitter:title" content="<?php echo $json["title"]; ?>" />
    <meta name="twitter:description" content="<?php echo $json["description"]; ?>" />
    <meta name="twitter:image" content="<?php echo $json["thumb"]; ?>" />
    <meta name="twitter:url" content="<?php echo $json["url"]; ?>" />

    <style>
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: white;
            z-index: 9999999;
            transition: .3s ease opacity;
        }
    </style>
    <script type="module" crossorigin src="/assets/index-xnLq7uHu.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-zZ1OfYpc.css">
</head>

<body>
    <div id="app"><!--app-html--></div>
    <script src="https://unpkg.com/vue-meta/dist/vue-meta.min.js"></script>
</body>

</html>