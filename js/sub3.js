//탭스와이퍼
        $(document).ready(function() {
            // 탭 클릭 이벤트
            $('.tabs .tab').click(function(e){ 
                e.preventDefault(); 
                  
                var ind = $(this).index('.tabs .tab'); 
                  
                $(".tabs .contlist").hide(); 
                $(".tabs .contlist:eq("+ind+")").fadeIn('slow'); 
                
                $(".tabs .tab").removeClass('active'); 
                $(this).addClass('active'); 
            });
        });