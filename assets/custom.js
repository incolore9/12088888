$(document).ready(()=>{
    let list = [
		{ 	
			img_title : "<573돌 한글날 : 다시 보는 한글, 다시 보는 한울>",
			img_url : "0.jpg" ,
			img_desc : "세종 문화회관에서 진행된 573돌을 기념하는 한글날, 한울전에 게스트로서 참가하였습니다. 꽃, 빛, 물, 낮이라는 레터링 글자를 기반으로 획을 분해, 재배열하여 그래픽 요소로 사용하여 포스터로 제작하였습니다." 
		},
		{ 	
			img_title : "<2019년 한국의 그래픽 문화. 문한샘, 박한솔>",
			img_url : "1.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<심-술-봉.2019>",
			img_url : "3.jpg" ,
			img_desc : "디자인학교에서 진행하는 2019 디자인 캠프를 위한 포스터를 제작하였습니다. 본 포스터는 오래오 스튜디오에서 기획한 워크숍의 결과물이며 디자이너가 힐링하는 방법의 하나로, 각종 걱정과 고민 힘든 점들을 다른 이들에게 그대로 떠넘겨버리는, 바톤터치하는 도구 심-술-봉입니다." 
		},
		{ 	
			img_title : "<6번째 감각>",
			img_url : "4.jpg" ,
			img_desc : "인간의 다섯가지 감각을 벗어나 과학적으로 설명되지 않는 예지럭, 직감, 텔레파시, 투시 등을 포함하고 있는 ‘6번째 감각’. 이것이 발현될 때 머리에서 연상되는 이미지 혹은 신체에 오는 여러 반응이 뒤섞이는 그 순간을 시각화하고자 하였습니다. 시각디자인과 연합 소모임 D:sense 에서 ‘감각’을 주제로 진행된 전시에 출품한 작업입니다." 
		},
		{ 	
			img_title : "<단도전-워크숍 포스터>",
			img_url : "5.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<블라인드 포스터전_자아_2018>",
			img_url : "6.jpg" ,
			img_desc : "블라인드 포스터 2018에 출품한 작업물입니다. 자아의 모습으로 선인장을 선정하였고, 글자의 획을 통해 꽂과 선인장 특유의 가시들을 표현하고자 하였습니다." 
		},
		{ 	
			img_title : "<청계애 살어리랏다_2018>",
			img_url : "7.jpg" ,
			img_desc : "청계천 지역 일대의 재개발에 반대하는 포스터궐기에 참가하였습니다." 
		},
		
		{ 	
			img_title : "<콜로라도 사막 레터링>",
			img_url : "l7.jpg" ,
			img_desc : "2018_디자인학교에서 진행한 구모아 디자이너님의 레터링 워크숍 결과물입니다." 
		},
		

			{ 	
			img_title : "<image typeface, based on watch parts>",
			img_url : "l1.jpg" ,
			img_desc : "기계식 시계에 이용되는 부품들을 재배열하여 이미지 영문 타입페이스 디자인을 하였습니다. " 
		},
		{ 	
			img_title : "<라플레시아 레터링>",
			img_url : "l2.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<죽음, 존재 레터링>",
			img_url : "l3.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<그랜드 부다페스트 호텔 레터링>",
			img_url : "l4.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<블랙 레터 레터링>",
			img_url : "l5.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<'꽃' 레터링 연작>",
			img_url : "l6.jpg" ,
			img_desc : "" 
		},
		
		{ 	
			img_title : "<은하수 사탕 레터링>",
			img_url : "l8.jpg" ,
			img_desc : "북한의 광고물에 게시되어있던 상표를 기반으로 특유의 붓글씨로 획을 구성한 레터링입니다." 
		},
		{ 	
			img_title : "<힙선비 레터링>",
			img_url : "l9.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<닥터 지바고 레터링>",
			img_url : "l10.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<크리스마스 레터링>",
			img_url : "l11.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "<별빛다방 레터링>",
			img_url : "l12.jpg" ,
			img_desc : "네모틀 안에 꽉차게 그려 속공간을 최소한으로 하는 특징을 가진 글자입니다." 
		},

	];

	let list2 = [
		
	];
	
    list.map((item , idx) =>{
		let copied_thumb = $('.mockup').clone().removeClass('mockup');
		copied_thumb.find('.item-thumb_img').attr({'src': item.img_url , 'data-type-idx' : idx});
		$("#contents1-1").append(copied_thumb);

		$('[data-type-idx ='+idx+']').on("click", function(){
			$("#contents1-3").find('.item-img').attr('src' , item.img_url);
			$("#contents1-3").find('.item-img_desc').text(item.img_desc);
			$("#guidebox1-3").find('.guidetext').text(item.img_title);
		});
	});
	
	list2.map((item , idx) =>{
		let copied_thumb = $('.mockup').clone().removeClass('mockup');
		copied_thumb.find('.item-thumb_img').attr({'src': item.img_url , 'data-type-idx2' : idx});
		$("#contents1-2").append(copied_thumb);

		$('[data-type-idx2 ='+idx+']').on("click", function(){
			$("#contents1-3").find('.item-img').attr('src' , item.img_url);
			$("#contents1-3").find('.item-img_desc').text(item.img_desc);
			$("#guidebox1-3").find('.guidetext').text(item.img_title);
		});
	});
});