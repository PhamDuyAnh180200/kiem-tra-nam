let year = parseInt(prompt("(Nhập năm)"));
let namnhuan = false;
if (year % 4==0) {
    if (year % 100==0) {
        if (year % 400==0) {
            namnhuan = true;
        }
    } else {
        namnhuan = true;
    }
}
if (namnhuan) {
    alert(year + "la nam nhuan");
} else {
    alert(year + "khong phai nam nhuan");
}