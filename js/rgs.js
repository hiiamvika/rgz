let value = [52820, 46280, 46280, 46360, 46620, 46980, 46980, 46820, 
    64000, 53980, 52900, 54060, 53120, 52640, 51920, 52020, 52660, 52160, 51820, 52660, 52820]
function minmaxsr() {
    let maximum =(Math.max(...value));
    document.getElementById('max').innerHTML = 'Максимальное значение' + '<br>' + maximum + '&#8381;';

    let minimum = (Math.min(...value));
    document.getElementById('min').innerHTML = 'Минимальное значение' + '<br>' + minimum + '&#8381;';

    let summ = 0;
          for (let i = 0; i < value.length; i++) {
            summ =summ + value[i];
          }
          let sr = summ / value.length;
    let disper = 0;
          for (let i = 0; i < value.length; i++) {
            let t = value[i] - sr;
            disper += t*t;
          }
    let srkvad = Math.sqrt(disper/value.length-1);
    document.getElementById('sr').innerHTML = 'Среднеквадратическое отклонение' + '<br>' + srkvad.toFixed(2) + '&#8381;';
}