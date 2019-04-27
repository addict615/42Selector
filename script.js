var employeeData;
$(document).ready(function(){
  $.get( "https://sheets.googleapis.com/v4/spreadsheets/1lyzd2nm16jFZKoQU_aL8N7ppB-AQ9oAxQpUa_09qMgM/values/result!D2:AV1000?key=AIzaSyB5WTjIR5OZt108xl9uQApzeoNRWuMyYRE", function( data ) {
    employeeData = data;
    console.log(data);
  for(i=0;i<data.values.length;i++){
    var employeeName = data.values[i][0];
      $('#employeeSelect').append($('<option>', {
    value: employeeName,
    text: employeeName
}));
    
  }
    $('#employeeList').show();
    $('#loading').hide();
});
});

$('#employeeList').submit(function(e){
  e.preventDefault();
  displayEmployee($('#employeeSelect').val())
});

function displayEmployee(name){
  for(i=0;i<employeeData.values.length;i++){
    var employee = employeeData.values[i];
    if(employee[0] == name){
      $('#employeeDetails').html("推薦選擇  : " +  employee[1] 
     + "<p><p><p>========加權總分======== <br> Saber	 	阿爾托莉亞・潘德拉剛〔Alter〕：" + employee[2] 
     + "<br> Saber	 	尼祿・克勞狄烏斯 ：" + employee[3]
     + "<br> Saber	 	齊格飛 ：" + employee[4]
     + "<br> Saber	 	夏爾・德翁 ：" + employee[5]                  
     + "<br> Archer	 	Emiya ：" + employee[6]  
     + "<br> Archer	 	阿塔蘭塔 ：" + employee[7]                   
     + "<br> Lancer	 	伊莉莎白・巴托里 ：" + employee[8]
     + "<br> Rider	 	瑪莉・安東尼 ：" + employee[9]
     + "<br> Rider	 	瑪爾大 ：" + employee[10] 
     + "<br> Assassin	 	絲西娜 ：" + employee[11] 
     + "<br> Assassin	 	卡米拉 ：" + employee[12] 
     + "<br> Berserker	 	海克力斯 ：" + employee[13] 
     + "<br> Berserker	 	蘭斯洛特 ：" + employee[14] 
     + "<br> Berserker	 	玉藻貓 ：" + employee[15]
     + "<br> Rider	 	安妮・伯妮＆瑪莉・瑞德 ：" + employee[16]
     + "<br> Caster	 	美狄亞〔Lily〕 ：" + employee[17]
     + "<br> Caster	 	童謠 ：" + employee[18]    
     + "<br> Lancer	 	阿爾托莉亞・潘德拉剛〔Alter〕 ：" + employee[19]        
     + "<br> Berserker	 	弗蘭肯斯坦 ：" + employee[20]   
     + "<br> Lancer   芬恩・麥克庫爾 ：" + employee[21]     
     + "<br> Berserker	 	貝奧武夫 ：" + employee[22]   
     + "<br> Rider	 	阿斯托爾福 ：" + employee[23]   
     + "<br> Caster	 	海倫娜・布拉瓦茨基 ：" + employee[24]   
     + "<br> Saber	 	羅摩 ：" + employee[25]   
     + "<br> Lancer	 	李書文 ：" + employee[26]   
     + "<br> Caster	 	湯瑪斯・愛迪生 ：" + employee[27]   
     + "<br> Assassin	 	Emiya ：" + employee[28]   
     + "<br> Berserker	 	茨木童子 ：" + employee[29]   
     + "<br> Caster	 	尼托克里絲 ：" + employee[30]   
     + "<br> Saber	 	蘭斯洛特 ：" + employee[31]   
     + "<br> Archer	 	崔斯坦 ：" + employee[32] 
     + "<br> Saber	 	高文 ：" + employee[33] 
     + "<br> Lancer	 	弗拉德三世〔EXTRA〕：" + employee[34] 
     + "<br> Caster	 	吉爾伽美什 ：" + employee[35] 
     + "<br> Lancer	 	美杜莎 ：" + employee[36]
     + "<br> Avenger	 	戈爾貢 ：" + employee[37]
     + "<br> Archer	 	Emiya〔Alter〕 ：" + employee[38]
     + "<br> Avenger	 	海森・羅伯 ：" + employee[39]
     + "<br> Assassin	 	燕青 ：" + employee[40]
     + "<br> Saber	 	鈴鹿御前 ：" + employee[41]
     + "<br> Assassin	 	武則天 ：" + employee[42]
     + "<br> Berserker	 	彭忒西勒亞 ：" + employee[43]
                             );
      $('#employeeDetails').show();
    }
  }
}
