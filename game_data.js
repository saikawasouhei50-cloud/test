// --- 게임 설정 ---
const characters = [
    // name(고유), baseName, rarity, faction, stats, imageUrl, cardImageUrl, dialogues, skills, deathDialogue, story

    
    { 
        name: '[소중한 배낭] 선생', 
        baseName: '선생', 
        rarity: 'SSR', 
        faction: '탐정', 
        stats: { hp: 380, atk: 41, def: 31 }, 
        imageUrl: 'https://placehold.co/300x500/8B4513/ffffff?text=선생', 
        cardImageUrl: 'https://placehold.co/150x180/8B4513/ffffff?text=선생', 
        dialogues: ['소중한 배낭에게 탈이 날 수도 있으니까…', '저는 알 것 같군요. 그건 아기띠의 자국이라고.'], 
        skills: [
            { name: '익숙하지 않은 무게', dialogue: '배낭이 편한 자세를 찾아 그 자세를 유지해야만 했어요.', power: 2.3, type: 'damage' }, 
            { name: '아버지의 통찰', dialogue: '두 분이 아이가 없으셔서 깨닫지 못하신 것 같습니다.', power: 1.6, type: 'debuff_def' }
        ], 
        deathDialogue: '딸아이에겐... 아직...', 
        story: '서점에 들른 고등학교 수학 선생. 그는 도진과 현이 풀지 못했던 멍 자국의 미스터리를 단번에 꿰뚫어 본다. 그 역시 \'소중한 배낭\'을 매일 같이 매어야 했던 시절이 있었기 때문이다. 그의 통찰은 사건을 새로운 국면으로 이끈다.',
        enhancementSuccessDialogue: '이것도... 딸아이를 위한 일이겠죠.'
    },
    { 
        name: '[백청자] 한 현', 
        baseName: '한 현', 
        rarity: 'SR', 
        faction: '조수', 
        stats: { hp: 250, atk: 28, def: 21 }, 
        imageUrl: 'https://placehold.co/300x500/E0FFFF/000000?text=한현', 
        cardImageUrl: 'https://placehold.co/150x180/E0FFFF/000000?text=한현', 
        dialogues: ['이것 좀 보세요.', '글쎄요, 과연 잘 계시는 걸까요.', '멍들었죠.'], 
        skills: [{ name: '화면 줌인', dialogue: '여길 잘 보시라고요. 살색이 아니었어요.', power: 1.9, type: 'damage' }], 
        deathDialogue: '역시... 낌새가 이상했는데...', 
        story: '나름의 백도화 애청자. 그는 방송을 보던 중 평소와 다른 \'이상한 낌새\'를 느끼고 도진에게 도움을 구한다. 그의 날카로운 관찰력은 픽셀 너머에 숨겨진 붉은 멍 자국을 찾아내고, 사건의 첫 번째 실마리를 제공한다.' 
    },
    { 
        name: '[목줄 매인 고양이] 백도화', 
        baseName: '백도화', 
        rarity: 'R', 
        faction: '조수', 
        stats: { hp: 140, atk: 16, def: 11 }, 
        imageUrl: 'https://placehold.co/300x500/FFC0CB/000000?text=백도화', 
        cardImageUrl: 'https://placehold.co/150x180/FFC0CB/000000?text=백도화', 
        dialogues: ['이사를 하니깐 물건이 자꾸 헷갈리는 거 있지?', '엄살 아니라니까? 너희도 가구 옮기고 해 봐라.', '아!'], 
        skills: [{ name: '허공의 찻잔', dialogue: '자 농담이고 오늘 할 건…… 아!', power: 1.5, type: 'damage' }], 
        deathDialogue: '결국... 찐빠가...', 
        story: '실패한 도시를 떠나 새로 방송을 시작한 스트리머. 고양이 귀 헤드셋을 쓴 채 여전히 너스레를 떨지만, 그의 어깨에는 의문의 멍 자국이 남아있다. 물컵을 쏟는 사소한 실수조차 현에게는 그가 \'목줄에 매여있다\'는 심증을 굳히는 단서가 된다.' 
    },
    { 
        name: '[결혼 반지는 아니지만] 서도진', 
        baseName: '서도진', 
        rarity: 'SSR', 
        faction: '탐정', 
        stats: { hp: 375, atk: 44, def: 29 }, 
        imageUrl: 'https://placehold.co/300x500/C0C0C0/000000?text=서도진', 
        cardImageUrl: 'https://placehold.co/150x180/C0C0C0/000000?text=서도진', 
        dialogues: ['네, 네. (결혼) 했어요.', '어, 없, 없는데요. (아이는)', '우리 너무 당연하게 묶여있다고 전제하는 거 아냐...?'], 
        skills: [
            { name: '약지의 반지', dialogue: '이건... 결혼 반지는 아니지만, 뭐.', power: 2.4, type: 'damage' }, 
            { name: '공동 생활자', dialogue: '결혼한 부부와 거진 동일한 생활을 하고 있으니까.', power: 1.8, type: 'vampire' }
        ], 
        deathDialogue: '필규... 내 원고는...', 
        story: '가게를 방문한 낯선 손님에게 얼떨결에 결혼 여부를 고백(?)하게 된 소설가. 그의 왼손 약지에는 필규와 맞춘 반지가 끼워져 있다. 그는 \'선생\'의 날카로운 질문에 당황하면서도, 도화의 사건에서 눈을 떼지 않는다.',
        enhancementSuccessDialogue: '이 반지의 의미가... 조금은 무거워진 것 같군.'
    },
    { 
        name: '[좋은 하루 되세요] 윤필규', 
        baseName: '윤필규', 
        rarity: 'R', 
        faction: '조수', 
        stats: { hp: 150, atk: 14, def: 13 }, 
        imageUrl: 'https://placehold.co/300x500/ADD8E6/000000?text=윤필규', 
        cardImageUrl: 'https://placehold.co/150x180/ADD8E6/000000?text=윤필규', 
        dialogues: ['안녕하세요, 날이 부쩍 추워졌네요.', '그럼 좋은 하루 되세요.', '(뭘 보고 계셨던 거지?)'], 
        skills: [{ name: '아침 목례', dialogue: '아아 예, 좋은 하루 되세요.', power: 1.4, type: 'damage' }], 
        deathDialogue: '오늘은... 좋은 하루가 아니었나...', 
        story: '출근길 엘리베이터에서 이웃인 \'선생\'과 마주친 편집자. 그는 아이들 이야기로 화기애애한 아침 인사를 나누지만, 헤어지기 직전 \'선생\'이 자신의 왼손 반지를 뚫어져라 쳐다보는 것을 깨닫고 알 수 없는 찝찝함을 느낀다.' 
    },
// 👆 여기까지 붙여넣고, 이 바로 다음 줄에 ]; 가 오면 됩니다.

				{
        name: '[소설가] 서도진', 
        baseName: '서도진', 
        rarity: 'N', 
        faction: '탐정', 
        stats: { hp: 50, atk: 5, def: 5 }, 
        imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=서도진', 
        cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=서도진', 
        dialogues: ['하아... 마감이 코앞인데.', '이 이야기는 어떻게 끝내야 할까.'], 
        skills: [{ name: '퇴고', dialogue: '이 문장은... 영 별로군.', power: 1.2, type: 'damage' }], // 스킬명 변경
        deathDialogue: '내 소설은... 미완성으로...', 
        story: `서재에 앉아 잉크 냄새를 맡는 것이 세상에서 가장 큰 행복이었던 남자, 서도진. 그는 베스트셀러 작가였지만, 세상의 명성보다는 자신만의 이야기 세계에 침잠하는 것을 더 즐겼다. 담당 편집자 윤필규의 격려 덕분에 겨우 글쟁이 생활을 이어가고 있다.\n\n그의 서재는 고요했다. 창밖의 도시 소음만이 희미하게 들려올 뿐, 공간을 채우는 것은 오직 오래된 종이 냄새와 그가 내쉬는 깊은 한숨뿐이었다. 다음 작품의 마감이 코앞이었지만, 이야기의 마지막 조각이 맞춰지지 않았다. 마치 안개 속을 헤매는 기분이었다. "젠장, 이럴 때가 아닌데..." 그는 헝클어진 머리를 거칠게 쓸어 넘겼다.[PAGE_BREAK]그러던 어느 날, 그의 오랜 친구이자 경쟁자였던 작가가 싸늘한 시신으로 발견되었다. 현장은 마치 소설의 한 장면처럼 기묘하게 꾸며져 있었고, 경찰은 단순 사고로 종결하려 했다. 하지만 서도진은 직감했다. 이것은 사고가 아니다. 누군가가 의도적으로 만들어낸, 잔혹한 이야기의 시작이라는 것을. 그는 친구의 억울한 죽음의 진실을 밝히기 위해, 그리고 자신의 이야기가 더는 더럽혀지는 것을 막기 위해 직접 사건에 뛰어들기로 결심한다. 그의 손에는 만년필 대신, 차가운 루페가 들려 있었다.` 
    },
    { 
        name: '[탐정] 서도진', 
        baseName: '서도진', 
        rarity: 'R', 
        faction: '탐정', 
        stats: { hp: 100, atk: 15, def: 10 }, 
        imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=서도진', 
        cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=서도진', 
        dialogues: ['사건 현장은 보존해주시죠.', '진실은 하나뿐입니다.'], 
        skills: [{ name: '추리', dialogue: '모든 단서는... 당신을 가리키는군요.', power: 1.5, type: 'damage' }], 
        deathDialogue: '이런... 중요한 단서를 놓쳤군...', 
        story: '떠밀려 시작한 탐정 일이지만, 그의 날카로운 관찰력과 작가 특유의 상상력은 사건의 이면에 숨겨진 진실을 꿰뚫어 본다. 그는 이제 이야기 속 인물이 아닌, 현실의 탐정이다.' 
    },
    // [악몽] 서도진 카드는 제외
    { name: '[악몽] 서도진', baseName: '서도진', rarity: 'SR', faction: '범인', stats: { hp: 200, atk: 30, def: 15 }, imageUrl: 'https://i.imgur.com/SXNh4TG.png', cardImageUrl: 'https://i.imgur.com/fgU3cqD.png', dialogues: ['그렇게 물어도 말이야, 꿈속이니까 말해보라는 핑계를 덧붙여도 말이야. 내가 입에 담을 수 있는 건 그저...'], skills: [{ name: '현실 침식', dialogue: '이게 꿈이 아니라고 확신할 수 있어서 좋겠어.', power: 1.8, type: 'damage' }], deathDialogue: '이 악몽은... 이제 시작일 뿐이야...', story: '그가 쓴 소설은 단순한 이야기가 아니다. 독자의 마음속 가장 깊은 공포를 파고드는 현실의 악몽 그 자체다. 그는 자신의 펜 끝에서 벌어지는 비극을 즐긴다.' },
    { 
        name: '[작가의 우울] 서도진', 
        baseName: '서도진', 
        rarity: 'SSR', 
        faction: '탐정', 
        stats: { hp: 380, atk: 42, def: 28 }, 
        imageUrl: 'https://placehold.co/300x500/4a5568/ffffff?text=서도진', 
        cardImageUrl: 'https://placehold.co/150x180/4a5568/ffffff?text=서도진', 
        dialogues: ['이야기의 끝은... 언제나 비극이지.', '이해하고 싶지 않았는데...'], 
        skills: [
            { name: '행간 읽기', dialogue: '진실은 언제나... 쓰디쓴 법.', power: 2.2, type: 'damage' }, 
            { name: '에필로그', dialogue: '이제, 이 이야기의 막을 내리죠.', power: 1.5, type: 'debuff_def' }
        ], 
        deathDialogue: '결국... 나 또한 이야기의 일부였을 뿐인가...', 
        story: '범인의 마음을 너무 깊이 이해해버린 천재 작가. 그는 사건의 진실을 꿰뚫어 볼수록, 인간 내면의 깊은 어둠과 마주하며 끝없는 우울에 잠긴다. 이야기가 그를 잠식하고 있다.', 
        enhancementSuccessDialogue: '이것이... 이야기의 새로운 경지로군.'
    },
    { 
        name: '[편집자] 윤필규', 
        baseName: '윤필규', 
        rarity: 'N', 
        faction: '조수', 
        stats: { hp: 60, atk: 8, def: 3 }, 
        imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=윤필규', 
        cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=윤필규', 
        dialogues: ['선생님, 마감은 지키셔야 합니다.', '여기 오타가 있네요.'], 
        skills: [{ name: '교정', dialogue: '이 문장은 틀렸습니다. 다시 쓰시죠.', power: 1.3, type: 'damage' }], 
        deathDialogue: '제 원고는... 아직인데!', 
        story: '서도진의 담당 편집자. 슬럼프에 빠진 작가를 다독이며 마감을 지키게 하는 것이 그의 주된 업무다. 가끔은 편집자보다 보호자에 가깝다.' 
    },
    { 
        name: '[조수] 윤필규', 
        baseName: '윤필규', 
        rarity: 'R', 
        faction: '조수', 
        stats: { hp: 110, atk: 14, def: 11 }, 
        imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=윤필규', 
        cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=윤필규', 
        dialogues: ['제가 도울 일이 있을까요?', '선생님 혼자 보내드릴 순 없죠.'], 
        skills: [{ name: '자료 조사', dialogue: '관련 자료는 전부 찾아왔습니다!', power: 1.4, type: 'damage' }], 
        deathDialogue: '제가 너무 부족했나요?', 
        story: '사건에 휘말린 서도진을 걱정하며 그의 곁을 지킨다. 어딘가 어설프지만, 그의 꼼꼼함과 성실함은 사건 해결에 중요한 실마리를 제공한다.' 
    },
    { 
        name: '[동거인] 윤필규', 
        baseName: '윤필규', 
        rarity: 'SR', 
        faction: '조수', 
        stats: { hp: 240, atk: 26, def: 19 }, 
        imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=윤필규', 
        cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=윤필규', 
        dialogues: ['선생님! 또 밤새신 거예요? 식사는요?', '집세… 잊지 않으셨죠?'], 
        skills: [{ name: '생활 관리', dialogue: '건강 생각도 좀 하세요!', power: 1.9, type: 'damage' }], // 스킬명 변경
        deathDialogue: '그래도 선생님 원고는 지켰어요.', 
        story: '작가와 함께 살면서 그의 생활 전반을 관리한다. 때로는 편집자보다 엄마 같은 잔소리를 늘어놓지만, 그만큼 서도진을 깊이 걱정하고 있다.' 
    },
    { 
        name: '[올곧은 정의] 윤필규', 
        baseName: '윤필규', 
        rarity: 'SSR', 
        faction: '조수', 
        stats: { hp: 370, atk: 43, def: 29 }, 
        imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=윤필규', 
        cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=윤필규', 
        dialogues: ['진실을 외면할 순 없습니다!', '제가 반드시 바로잡겠습니다.'], 
        skills: [
            { name: '내부 고발', dialogue: '제가 알고 있는 모든 것을 밝히겠습니다!', power: 2.4, type: 'damage' }, 
            { name: '굳은 의지', dialogue: '저는 여기서 물러서지 않습니다!', power: 1.8, type: 'vampire' }
        ], 
        deathDialogue: '정의는 반드시… 살아있습니다…', 
        story: '평범해 보였던 편집자. 하지만 그의 마음 속에는 불의를 참지 못하는 뜨거운 정의감이 숨겨져 있었다. 그는 더 이상 침묵하지 않기로 결심했다.' 
    },
    { 
        name: '[연구자] 윤서천', 
        baseName: '윤서천', 
        rarity: 'N', 
        faction: '조수', 
        stats: { hp: 45, atk: 9, def: 4 }, 
        imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=윤서천', 
        cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=윤서천', 
        dialogues: ['이 반응, 예상 밖인데.', '데이터가 더 필요하군.'], 
        skills: [{ name: '분석', dialogue: '결과를 다시 검토해야겠군.', power: 1.3, type: 'damage' }], 
        deathDialogue: '변수가 너무 많았어!', 
        story: '일본 유학 중 지도 교수를 잃고 귀국한 화학과 대학원생. 조용하고 내성적인 성격이지만, 연구에 대한 집념은 누구보다 강하다.' 
    },
    { 
        name: '[범인] 윤서천', 
        baseName: '윤서천', 
        rarity: 'R', 
        faction: '범인', 
        stats: { hp: 100, atk: 17, def: 9 }, 
        imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=윤서천', 
        cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=윤서천', 
        dialogues: ['계획대로 진행되고 있군.', '이 정도면 충분하겠지.'], 
        skills: [{ name: '독극물 제조', dialogue: '완벽한 비율이야.', power: 1.6, type: 'damage' }], 
        deathDialogue: '내 계산이 틀렸을 리가!', 
        story: '잃어버린 지도 교수의 연구를 완성하기 위해서라면, 그는 어떤 수단도 가리지 않는다. 그의 천재적인 두뇌는 위험한 길로 향하고 있다.' 
    },
    { 
        name: '[실험쥐] 윤서천', 
        baseName: '윤서천', 
        rarity: 'SR', 
        faction: '범인', 
        stats: { hp: 260, atk: 24, def: 17 }, 
        imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=윤서천', 
        cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=윤서천', 
        dialogues: ['내 몸으로 직접 증명하겠어.', '이 정도 고통은 예상 범위 내다.'], 
        skills: [{ name: '이상 반응', dialogue: '크윽! 이게… 그 효과인가!', power: 2.0, type: 'damage' }], 
        deathDialogue: '데이터는 확보했나…?', 
        story: '연구의 완성을 위해 자신의 몸을 기꺼이 실험 대상으로 삼는다. 그의 눈빛에는 광기와 희생 정신이 뒤섞여 있다.' 
    },
    { 
        name: '[in vivo] 윤서천', 
        baseName: '윤서천', 
        rarity: 'SSR', 
        faction: '탐정', 
        stats: { hp: 340, atk: 48, def: 24 }, 
        imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=윤서천', 
        cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=윤서천', 
        dialogues: ['더 위대한 결과를 위해선… 감수해야지.', '인류를 위한 희생이다.'], 
        skills: [
            { name: '임상 실험', dialogue: '네 희생은 헛되지 않을 거다.', power: 2.5, type: 'damage' }, 
            { name: '부작용 제어', dialogue: '이런 반응은… 예상 밖인데! 제어해야 해!', power: 1.4, type: 'debuff_def' } // 스킬명 변경
        ], 
        deathDialogue: '연구는… 계속되어야 한다…', 
        story: '그는 자신의 연구가 인류를 구원할 것이라 굳게 믿는다. 그 과정에서 발생하는 사소한 희생은 불가피하다고 생각하며, 때로는 탐정 일행에게 협력하기도 한다.' 
    },
    { 
        name: '[서점 주인] 한 현', 
        baseName: '한 현', 
        rarity: 'N', 
        faction: '조수', 
        stats: { hp: 70, atk: 6, def: 6 }, 
        imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=한현', 
        cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=한현', 
        dialogues: ['찾으시는 책이라도 있으신가요?', '어서 오세요.'], 
        skills: [{ name: '책 정리', dialogue: '분류는 정확해야죠.', power: 1.1, type: 'damage' }], 
        deathDialogue: '서점 문은… 닫아야 하는데…', 
        story: '동네의 작은 서점을 운영하는 평범하고 조용한 청년. 가끔 보이는 날카로운 눈빛은 그가 평범하지만은 않다는 것을 암시한다.' 
    },
    { 
        name: '[조수] 한 현', 
        baseName: '한 현', 
        rarity: 'R', 
        faction: '조수', 
        stats: { hp: 140, atk: 14, def: 13 }, 
        imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=한현', 
        cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=한현', 
        dialogues: ['이 근처라면 제가 잘 압니다.', '도움이 필요하시면 말씀하세요.'], 
        skills: [{ name: '현장 안내', dialogue: '이쪽입니다. 조심하세요.', power: 1.4, type: 'damage' }], 
        deathDialogue: '제가 도움이 되었을지 모르겠네요.', 
        story: '사건의 진상을 파헤치는 탐정을 보며, 그는 잊고 있던 과거의 자신을 떠올린다. 그는 망설임 끝에 탐정을 돕기로 결심한다.' 
    },
    { 
        name: '[동행인] 한 현', 
        baseName: '한 현', 
        rarity: 'SR', 
        faction: '조수', 
        stats: { hp: 230, atk: 28, def: 20 }, 
        imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=한현', 
        cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=한현', 
        dialogues: ['혼자 가게 둘 순 없죠.', '위험한 곳이라도 괜찮습니다.'], 
        skills: [{ name: '길 찾기', dialogue: '지름길을 알고 있습니다!', power: 1.7, type: 'damage' }], 
        deathDialogue: '먼저 가십시오!', 
        story: '위험한 길이라는 것을 알면서도, 그는 동료를 위해 기꺼이 그 길에 함께 오른다. 조용하지만 굳건한 그의 존재는 큰 힘이 된다.' 
    },
    { 
        name: '[한때는, 탐정] 한 현', 
        baseName: '한 현', 
        rarity: 'SSR', 
        faction: '탐정', 
        stats: { hp: 390, atk: 40, def: 30 }, 
        imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=한현', 
        cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=한현', 
        dialogues: ['오랜만이군, 이 감각.', '사건은 스스로 말하는 법이지.'], 
        skills: [
            { name: '오래된 통찰', dialogue: '범인은… 아직 이 안에 있어.', power: 2.2, type: 'damage' }, 
            { name: '보호', dialogue: '제 뒤에 계십시오!', power: 1.9, type: 'vampire' }
        ], 
        deathDialogue: '결국… 여기까지인가.', 
        story: '과거의 명성을 뒤로 하고 평범한 삶을 택했던 그. 하지만 눈앞의 사건은 그를 다시 탐정의 길로 이끈다. 녹슨 칼날은 여전히 날카롭다.' 
    },
    { 
        name: '[연구자] 도천영', 
        baseName: '도천영', 
        rarity: 'N', 
        faction: '탐정', 
        stats: { hp: 65, atk: 7, def: 5 }, 
        imageUrl: 'https://placehold.co/300x500/4fd1c5/ffffff?text=도천영', 
        cardImageUrl: 'https://placehold.co/150x180/4fd1c5/ffffff?text=도천영', 
        dialogues: ['연구에는 열의가 필요합니다.', 'FM대로 진행합시다.'], 
        skills: [{ name: '데이터 분석', dialogue: '이 패턴은… 의미가 있군요.', power: 1.1, type: 'damage' }], 
        deathDialogue: '연구비가… 부족했어.', 
        story: '서울 모 대학 화학과 부교수. FM 스타일이지만 연구에 대한 열정은 아직 남아있다. 그의 마이너한 연구 주제에 관심을 보이는 학생이 없어 고민이다.' 
    },
    { 
        name: '[탐정] 도천영', 
        baseName: '도천영', 
        rarity: 'R', 
        faction: '탐정', 
        stats: { hp: 130, atk: 15, def: 12 }, 
        imageUrl: 'https://placehold.co/300x500/319795/ffffff?text=도천영', 
        cardImageUrl: 'https://placehold.co/150x180/319795/ffffff?text=도천영', 
        dialogues: ['현장의 데이터는 거짓말을 하지 않습니다.', '감정보단 증거를 믿어야죠.'], 
        skills: [{ name: '증거 수집', dialogue: '이 미세한 차이가… 결정적이군요.', power: 1.4, type: 'damage' }], 
        deathDialogue: '이런 변수는… 계산에 없었는데.', 
        story: '사건 현장을 하나의 거대한 실험실로 간주한다. 감정보단 데이터와 증거를 신뢰하며, 냉철한 분석으로 진실에 다가선다.' 
    },
    { 
        name: '[in vitro] 도천영', 
        baseName: '도천영', 
        rarity: 'SR', 
        faction: '탐정', 
        stats: { hp: 220, atk: 29, def: 19 }, 
        imageUrl: 'https://placehold.co/300x500/086f83/ffffff?text=도천영', 
        cardImageUrl: 'https://placehold.co/150x180/086f83/ffffff?text=도천영', 
        dialogues: ['자, 실험 결과를 확인하죠.', '변수는 완벽히 통제되었습니다.'], 
        skills: [{ name: '가설 검증', dialogue: '제 가설이 옳았습니다.', power: 1.8, type: 'damage' }], 
        deathDialogue: '실험… 실패인가.', 
        story:
