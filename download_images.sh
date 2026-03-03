#!/bin/bash
mkdir -p public/images
urls=(
"https://i.ibb.co/FXpHvTV/IMG-20240512-193547.jpg"
"https://i.ibb.co/k5PgSLB/IMG-20240624-191014.jpg"
"https://i.ibb.co/HqJ10hZ/IMG-20240624-190956.jpg"
"https://i.ibb.co/7zpZkcs/IMG-20240529-213014.jpg"
"https://i.ibb.co/svF7BdH/IMG-20240526-110027.jpg"
"https://i.ibb.co/Sxhm2s5/IMG-20240520-091516.jpg"
"https://i.ibb.co/pv1QByV/IMG-20240604-214742.jpg"
"https://i.ibb.co/fVXj1dfs/IMG-20250613-220118538-HDR.jpg"
"https://i.ibb.co/mWyQYKy/IMG-20250613-220211788-HDR.jpg"
"https://i.ibb.co/2L5Pf32/IMG-20250613-220230511-HDR.jpg"
"https://i.ibb.co/q3ypDZmZ/IMG-20250613-220319426.jpg"
"https://i.ibb.co/Ngdq5qQ8/IMG-20250613-220331836.jpg"
"https://i.ibb.co/M5R5Gs9Z/IMG-20250613-220456553.jpg"
"https://i.ibb.co/h11b8JFK/IMG-20250613-220341075-HDR.jpg"
"https://i.ibb.co/HfkqF2Ww/IMG-20250613-220513036-HDR.jpg"
"https://i.ibb.co/QvhCyMV2/IMG-20250613-221825554-HDR.jpg"
"https://i.ibb.co/ZpJMT0H3/IMG-20250613-221956961-HDR.jpg"
"https://i.ibb.co/jKPnc1p/IMG-20250613-222010451-HDR.jpg"
"https://i.ibb.co/3YTLQQTW/IMG-20250613-222022287-HDR.jpg"
"https://i.ibb.co/93VTZFrQ/IMG-20250613-222033991-HDR.jpg"
"https://i.ibb.co/k2K5cFDf/IMG-20250613-215120544-HDR.jpg"
"https://i.ibb.co/fYKDD07T/IMG-20250613-215449336.jpg"
"https://i.ibb.co/0jbhsVcq/IMG-20250613-222331385.jpg"
)

for url in "${urls[@]}"; do
    filename=$(basename "$url")
    echo "Downloading $filename..."
    curl -s -L "$url" -o "public/images/$filename"
done
echo "All images downloaded."
