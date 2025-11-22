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
        story: '통제된 환경, 완벽한 변수 통제 하에 진실을 규명한다. 그의 손끝에서 벌어지는 작은 실험은 때로 사건 전체를 뒤흔드는 중요한 단서가 된다.' 
    },
    { 
        name: '[연구자] 박연우', 
        baseName: '박연우', 
        rarity: 'N', 
        faction: '탐정', 
        stats: { hp: 75, atk: 5, def: 6 }, 
        imageUrl: 'https://placehold.co/300x500/f6ad55/ffffff?text=박연우', 
        cardImageUrl: 'https://placehold.co/150x180/f6ad55/ffffff?text=박연우', 
        dialogues: ['하아... 퇴근하고 싶다.', '오늘 점심은 뭐 먹지...'], 
        skills: [{ name: '문헌 조사', dialogue: '관련 논문을 찾아보죠... 귀찮지만.', power: 1.1, type: 'damage' }], 
        deathDialogue: '드디어... 쉴 수 있겠군...', 
        story: '서울 모 대학 화학과 교수. 한때 학계의 혜성이었으나 지금은 삶의 의지마저 희미해 보인다. 그녀의 연구실은 학생들의 자발적인 협조로 겨우 유지되고 있다.' 
    },
    { 
        name: '[탐정] 박연우', 
        baseName: '박연우', 
        rarity: 'R', 
        faction: '탐정', 
        stats: { hp: 150, atk: 12, def: 14 }, 
        imageUrl: 'https://placehold.co/300x500/dd6b20/ffffff?text=박연우', 
        cardImageUrl: 'https://placehold.co/150x180/dd6b20/ffffff?text=박연우', 
        dialogues: ['어쩔 수 없지, 한번 볼까요?', '귀찮은 일에 휘말렸네...'], 
        skills: [{ name: '알리바이 분석', dialogue: '이 시간엔... 이게 불가능해요. 알리바이가 깨졌네요.', power: 1.4, type: 'damage' }], 
        deathDialogue: '마지막 퍼즐 조각이... 어디 갔지...', 
        story: '귀찮아하면서도 사건에 휘말리면 특유의 통찰력으로 단서를 엮어 진실을 만들어낸다. 그에게 사건 해결은 복잡하지만 흥미로운 퍼즐 맞추기와 같다.' 
    },
    { 
        name: '[total synthesis] 박연우', 
        baseName: '박연우', 
        rarity: 'SR', 
        faction: '탐정', 
        stats: { hp: 240, atk: 25, def: 22 }, 
        imageUrl: 'https://placehold.co/300x500/c05621/ffffff?text=박연우', 
        cardImageUrl: 'https://placehold.co/150x180/c05621/ffffff?text=박연우', 
        dialogues: ['자, 이제 모든 조각이 모였네요.', '시작은 미미했지만, 결과는 완벽하죠.'], 
        skills: [{ name: '전합성', dialogue: '이것이 바로 진실의 구조입니다! 깔끔하죠?', power: 1.8, type: 'damage' }], 
        deathDialogue: '반응 경로가... 막혔어.', 
        story: '아무것도 없는 곳에서 시작하여 단 하나의 완벽한 진실을 구축해낸다. 한때 학계의 혜성이었던 그녀의 번뜩이는 통찰력은 여전히 살아있다.' 
    },
    { 
        name: '[연구자] 강은율', 
        baseName: '강은율', 
        rarity: 'N', 
        faction: '조수', 
        stats: { hp: 60, atk: 8, def: 5 }, 
        imageUrl: 'https://placehold.co/300x500/76e4f7/000000?text=강은율', 
        cardImageUrl: 'https://placehold.co/150x180/76e4f7/000000?text=강은율', 
        dialogues: ['네? 아… 네, 알겠습니다.', '4f 오비탈은 정말 아름답죠.'], 
        skills: [{ name: '모델링', dialogue: '계산 결과는 이렇게 나왔습니다.', power: 1.1, type: 'damage' }], 
        deathDialogue: '오차가… 있었나.', 
        story: '서울 모 대학 화학과 조교수. 언제나 미소를 잃지 않는 긍정적인 성격이다. 복잡한 란타넘족 원소들의 전자 배치를 계산하는 것을 좋아한다.' 
    },
    { 
        name: '[조수] 강은율', 
        baseName: '강은율', 
        rarity: 'R', 
        faction: '조수', 
        stats: { hp: 125, atk: 16, def: 11 }, 
        imageUrl: 'https://placehold.co/300x500/0bc5ea/ffffff?text=강은율', 
        cardImageUrl: 'https://placehold.co/150x180/0bc5ea/ffffff?text=강은율', 
        dialogues: ['요청하신 정보, 여기 있습니다.', '제가 도울 수 있어 기쁩니다.'], 
        skills: [{ name: '정보 처리', dialogue: '여기서 유의미한 패턴을 발견했습니다.', power: 1.4, type: 'damage' }], 
        deathDialogue: '제 계산이… 틀렸을 리 없는데.', 
        story: '탐정의 요청에 따라 방대한 양의 데이터를 수집하고 분석하며 그의 활동을 돕는다. 긍정적인 태도로 팀의 분위기를 밝게 만든다.' 
    },
    { 
        name: '[in silico] 강은율', 
        baseName: '강은율', 
        rarity: 'SR', 
        faction: '조수', 
        stats: { hp: 210, atk: 30, def: 18 }, 
        imageUrl: 'https://placehold.co/300x500/0987a0/ffffff?text=강은율', 
        cardImageUrl: 'https://placehold.co/150x180/0987a0/ffffff?text=강은율', 
        dialogues: ['모든 가능성을 시뮬레이션했습니다.', '결과는 분명합니다.'], 
        skills: [{ name: '예측 분석', dialogue: '범인은, 다음엔 이곳으로 갈 겁니다. 확률 98.7%죠.', power: 1.8, type: 'damage' }], 
        deathDialogue: '예외 케이스였나…', 
        story: '사건의 모든 정보를 데이터로 변환하여 가장 가능성이 높은 진실을 도출해낸다. 그의 미소 뒤에는 날카로운 분석력이 숨겨져 있다.' 
    },
    { 
        name: '[연구자] 백정문', 
        baseName: '백정문', 
        rarity: 'N', 
        faction: '탐정', 
        stats: { hp: 70, atk: 6, def: 6 }, 
        imageUrl: 'https://placehold.co/300x500/fbb6ce/000000?text=백정문', 
        cardImageUrl: 'https://placehold.co/150x180/fbb6ce/000000?text=백정문', 
        dialogues: ['수학적으로 접근해보죠.', '이 문제는 흥미롭군요.'], 
        skills: [{ name: '미분방정식 풀이', dialogue: '이 변수를 풀면 답이 보일 겁니다.', power: 1.1, type: 'damage' }], // 스킬명 변경
        deathDialogue: '증명이… 미완성인데.', 
        story: '서울 모 대학 수학과 조교수. 부드러운 인상과 달리 복잡한 문제를 푸는 것을 즐긴다. 학생들에게 인기가 많지만, 어딘가 다른 모습이 있다는 소문도 있다.' 
    },
    { 
        name: '[탐정] 백정문', 
        baseName: '백정문', 
        rarity: 'R', 
        faction: '탐정', 
        stats: { hp: 140, atk: 14, def: 13 }, 
        imageUrl: 'https://placehold.co/300x500/f687b3/ffffff?text=백정문', 
        cardImageUrl: 'https://placehold.co/150x180/f687b3/ffffff?text=백정문', 
        dialogues: ['이 문제, 아름답군요.', '논리적으로 생각해보시죠.'], 
        skills: [{ name: '위상수학적 분석', dialogue: '구멍을 찾았습니다. 논리의 허점이군요.', power: 1.4, type: 'damage' }], 
        deathDialogue: '결정적인 순간에… 계산 착오라니.', 
        story: '사건을 하나의 거대한 수학 문제처럼 접근한다. 숨겨진 패턴과 논리의 허점을 찾아내 진실로 향하는 방정식을 풀어낸다.' 
    },
    { 
        name: '[삼중항] 백정문', 
        baseName: '백정문', 
        rarity: 'SR', 
        faction: '탐정', 
        stats: { hp: 230, atk: 28, def: 20 }, 
        imageUrl: 'https://placehold.co/300x500/d53f8c/ffffff?text=백정문', 
        cardImageUrl: 'https://placehold.co/150x180/d53f8c/ffffff?text=백정문', 
        dialogues: ['후후, 이제 좀 재밌어지겠네요!', '예측 불가능한 변수가 세상을 움직이죠.'], 
        skills: [{ name: '카오스 이론 적용', dialogue: '나비의 날갯짓이 폭풍을 부르죠!', power: 1.8, type: 'damage' }], // 스킬명 변경
        deathDialogue: '결국… 엔트로피는 증가하는 건가.', 
        story: '평소의 부드러운 모습 뒤에 숨겨진 또 다른 얼굴. 예측 불가능하고 혼란스러운 상황 속에서 오히려 그는 더욱 명료하게 진실을 꿰뚫어 본다.' 
    },
    { 
        name: '[소설가] 독고유진', 
        baseName: '독고유진', 
        rarity: 'N', 
        faction: '조수', 
        stats: { hp: 80, atk: 6, def: 5 }, 
        imageUrl: 'https://placehold.co/300x500/9f7aea/ffffff?text=독고유진', 
        cardImageUrl: 'https://placehold.co/150x180/9f7aea/ffffff?text=독고유진', 
        dialogues: ['오싹한 이야기네요. 마음에 들어요.', '이건 소설 소재로 딱인데.'], 
        skills: [{ name: '인물 설정 분석', dialogue: '이 캐릭터는… 이런 상황에서 이렇게 행동할 리가 없어요.', power: 1.1, type: 'damage' }], // 스킬명 변경
        deathDialogue: '결말이… 마음에 안 드는데.', 
        story: '호러 소설가. 소설보다 더 소설 같은 현실의 사건에 흥미를 느끼고, 교수 양석민을 따라다니며 사건 해결을 돕는다. 때로는 그의 직감이 결정적인 단서가 된다.' 
    },
    { 
        name: '[조수] 독고유진', 
        baseName: '독고유진', 
        rarity: 'R', 
        faction: '조수', 
        stats: { hp: 160, atk: 13, def: 13 }, 
        imageUrl: 'https://placehold.co/300x500/805ad5/ffffff?text=독고유진', 
        cardImageUrl: 'https://placehold.co/150x180/805ad5/ffffff?text=독고유진', 
        dialogues: ['이 사건, 결말이 궁금해졌거든요.', '교수님, 이번엔 어떤가요?'], 
        skills: [{ name: '복선 파악', dialogue: '이건 그때 그 이야기와 이어져있어!', power: 1.4, type: 'damage' }], 
        deathDialogue: '제가 너무 깊이 들어왔나요?', 
        story: '사건 현장에서 소설의 복선을 찾아내듯 숨겨진 단서를 발견한다. 그는 이야기의 끝을 보기 위해 기꺼이 위험 속으로 뛰어든다.' 
    },
    { 
        name: '[무사] 독고유진', 
        baseName: '독고유진', 
        rarity: 'SR', 
        faction: '조수', 
        stats: { hp: 250, atk: 30, def: 18 }, 
        imageUrl: 'https://placehold.co/300x500/553c9a/ffffff?text=독고유진', 
        cardImageUrl: 'https://placehold.co/150x180/553c9a/ffffff?text=독고유진', 
        dialogues: ['이야기를 지키기 위해서라면, 뭐든지.', '펜보다는 검이 빠를 때도 있죠.'], 
        skills: [{ name: '일필휘지(一筆揮之)', dialogue: '이 검으로, 결말을 새로 쓰겠다!', power: 1.8, type: 'damage' }], 
        deathDialogue: '여기까지가… 제 이야기인가 봅니다.', 
        story: '그가 쓰는 것은 더 이상 펜이 아니다. 소중한 사람들과 자신이 만든 이야기를 지키기 위해, 그는 잊고 있던 검을 다시 잡았다. 호러 소설가의 숨겨진 모습이다.' 
    },
    { 
        name: '[연구자] 양석민', 
        baseName: '양석민', 
        rarity: 'N', 
        faction: '탐정', 
        stats: { hp: 70, atk: 7, def: 5 }, 
        imageUrl: 'https://placehold.co/300x500/38a169/ffffff?text=양석민', 
        cardImageUrl: 'https://placehold.co/150x180/38a169/ffffff?text=양석민', 
        dialogues: ['흐름을 읽어야 합니다. 모든 것에는 이유가 있지요.', '오래된 기록을 살펴보죠.'], 
        skills: [{ name: '문헌 연구', dialogue: '오래된 기록에 답이 있을지도 모릅니다.', power: 1.1, type: 'damage' }], 
        deathDialogue: '길을… 잃었군.', 
        story: '충청 모 대학 민속학과 교수. 인간과 외우주의 종교를 연구한다. 그의 연구실에는 기묘한 유물과 고문서가 가득하다.' 
    },
    { 
        name: '[탐정] 양석민', 
        baseName: '양석민', 
        rarity: 'R', 
        faction: '탐정', 
        stats: { hp: 145, atk: 15, def: 11 }, 
        imageUrl: 'https://placehold.co/300x500/2f855a/ffffff?text=양석민', 
        cardImageUrl: 'https://placehold.co/150x180/2f855a/ffffff?text=양석민', 
        dialogues: ['사건의 흐름이 보이기 시작했습니다.', '이것은 고대의 의식과 관련이 있을지도.'], 
        skills: [{ name: '민속학적 분석', dialogue: '이 현상은… 특정 전승과 일치하는군요.', power: 1.4, type: 'damage' }], // 스킬명 변경
        deathDialogue: '예상치 못한… 변수였습니다.', 
        story: '사건 현장에 남겨진 기묘한 상징이나 패턴을 민속학적 지식으로 분석하여, 범인의 의도나 다음 행동을 예측한다. 그의 지식은 때로 현대 과학을 뛰어넘는다.' 
    },
    { 
        name: '[인도자] 양석민', 
        baseName: '양석민', 
        rarity: 'SR', 
        faction: '탐정', 
        stats: { hp: 235, atk: 27, def: 21 }, 
        imageUrl: 'https://placehold.co/300x500/22543d/ffffff?text=양석민', 
        cardImageUrl: 'https://placehold.co/150x180/22543d/ffffff?text=양석민', 
        dialogues: ['제가, 진실로 가는 길을 보여드리죠.', '길을 잃지 않도록 조심하십시오.'], 
        skills: [{ name: '고대의 지혜', dialogue: '오래된 지혜가 우리를 인도할 겁니다.', power: 1.8, type: 'damage' }], // 스킬명 변경
        deathDialogue: '여기까지… 안내하는 것이 제 역할이었군요.', 
        story: '복잡하게 얽힌 사건 속에서 헤매는 동료들을 위해 가장 확실하고 빠른 길을 제시하는 길잡이. 그의 오래된 지식은 미궁 속에서 한 줄기 빛이 된다.' 
    },
    { 
        name: '[학생] 윤유준', 
        baseName: '윤유준', 
        rarity: 'N', 
        faction: '조수', 
        stats: { hp: 65, atk: 5, def: 8 }, 
        imageUrl: 'https://placehold.co/300x500/e53e3e/ffffff?text=윤유준', 
        cardImageUrl: 'https://placehold.co/150x180/e53e3e/ffffff?text=윤유준', 
        dialogues: ['어? 저건… 뭔가 이상한데요?', '이 약, 이름이 뭐였더라…'], 
        skills: [{ name: '목격', dialogue: '제가 본 게 맞다면… 저 사람이 범인일지도 몰라요!', power: 1.1, type: 'damage' }], 
        deathDialogue: '못 본 척… 했어야 했는데.', 
        story: '충청 모 대학 약학과 학생. 오컬트를 좋아하지만 깊이 믿지는 않는다. 괴담 블로그를 즐겨보다가 우연히 사건의 결정적인 순간을 목격하게 된다.' 
    },
    { 
        name: '[조수] 윤유준', 
        baseName: '윤유준', 
        rarity: 'R', 
        faction: '조수', 
        stats: { hp: 135, atk: 12, def: 15 }, 
        imageUrl: 'https://placehold.co/300x500/c53030/ffffff?text=윤유준', 
        cardImageUrl: 'https://placehold.co/150x180/c53030/ffffff?text=윤유준', 
        dialogues: ['제가 봤어요. 저 사람이 확실해요.', '이 약의 성분은…'], 
        skills: [{ name: '증언', dialogue: '그날 밤, 그 사람은 분명히 거기에 있었어요!', power: 1.4, type: 'damage' }], 
        deathDialogue: '제가… 도움이 되었을까요?', 
        story: '자신의 목격과 약학 지식이 사건 해결에 중요한 단서가 된다는 것을 알고, 용기를 내어 탐정 일행을 돕기 시작한다.' 
    },
    { 
        name: '[방관자] 윤유준', 
        baseName: '윤유준', 
        rarity: 'SR', 
        faction: '조수', 
        stats: { hp: 225, atk: 26, def: 23 }, 
        imageUrl: 'https://placehold.co/300x500/742a2a/ffffff?text=윤유준', 
        cardImageUrl: 'https://placehold.co/150x180/742a2a/ffffff?text=윤유준', 
        dialogues: ['…저는 그저, 이 모든 걸 지켜볼 뿐입니다.', '결과는 이미 정해져 있을지도 모르죠.'], 
        skills: [{ name: '객관적 시선', dialogue: '감정은… 배제하는 편이 진실에 가까워지는 길입니다.', power: 1.8, type: 'damage' }], 
        deathDialogue: '결국… 아무것도 바뀌지 않았군.', 
        story: '사건의 추악한 진실과 인간의 어두운 면을 마주한 후, 그는 한 걸음 물러나 모든 것을 냉정하게 지켜보기로 결심한다. 더 이상 섣불리 개입하지 않으리라 다짐하면서.' 
    }
];
            
            const monsters = {
                // 1장 초반부 일반 몬스터
                '의혹의 안개': { name: '의혹의 안개', stats: { hp: 300, atk: 15, def: 10 }, imageUrl: 'https://placehold.co/300x300/a0aec0/4a5568?text=Fog+of+Doubt' },
                // 1장 후반부 일반 몬스터
                '모방범의 그림자': { name: '모방범의 그림자', stats: { hp: 800, atk: 30, def: 20 }, imageUrl: 'https://placehold.co/300x300/63b3ed/4a5568?text=Copycat+Shadow' },
                // 2장 방어형 몬스터
                '날조된 증거': { name: '날조된 증거', stats: { hp: 1200, atk: 40, def: 35 }, imageUrl: 'https://placehold.co/300x300/f56565/000000?text=Fabricated+Evidence' },
                // 2장 보스 및 강력한 몬스터
                '편집된 진실': { name: '편집된 진실', stats: { hp: 2000, atk: 50, def: 15 }, imageUrl: 'https://placehold.co/300x300/4a5568/ffffff?text=The+Edited+Truth' }
            };

            const mainChapters = [
    {
        chapterName: '제1장: 서재의 흔적',
        stages: [
            { 
                stageName: '1-1. 오래된 문장', monsterName: '의혹의 안개', rewards: { fountainPens: 20, currency: 5 },
                stageStory: [
                    { character: null, dialogue: '낡은 서재. 책상 위에는 박민준이 마지막으로 썼던 원고가 펼쳐져 있다. 그 원고는 사건 현장의 모든 것을 설명하려는 듯 완벽하게 보였다.' },
                    { character: '서도진', expression: 'neutral', position: 'left', dialogue: '모든 것이 너무 완벽해. 이대로는 경찰이 자살로 종결할 수밖에 없어.' },
                    { character: '도천영', expression: 'serious', position: 'right', dialogue: '우선, 이 현장의 모순을 찾아야 합니다. "의혹의 안개"가 우리를 가로막고 있군요.' }
                ] 
            },
            { 
                stageName: '1-2. 흐릿한 단서', monsterName: '의혹의 안개', rewards: { fountainPens: 25, currency: 5 },
                stageStory: [
                    { character: null, dialogue: '책상 아래에서 오래된 영수증이 발견되었다. 그것은 한 달 전, 박민준이 오른손잡이용 만년필을 구입했다는 증거였다.' },
                    { character: '서도진', expression: 'surprised', position: 'left', dialogue: '역시, 박민준은 왼손잡이야. 이 펜은... 범인이 가져갔거나, 아니면... 증거가 조작된 거지.' }
                ]
            },
            { 
                stageName: '1-3. 모방의 그림자', monsterName: '의혹의 안개', rewards: { fountainPens: 30, currency: 10 },
                stageStory: [
                    { character: '도천영', expression: 'neutral', position: 'right', dialogue: '현장에 남은 잉크 얼룩은 세 가지 종류입니다. 하나는 박민준의 것, 다른 하나는... 범인의 것, 그리고 나머지 하나는 모방의 흔적입니다.' },
                    { character: '서도진', expression: 'serious', position: 'left', dialogue: '세 번째 잉크가 이 사건의 열쇠군. 범인은 자신이 아닌 누군가의 흔적을 모방해 남겼어. 교활한 그림자군.' }
                ]
            },
            { 
                stageName: '1-4. 현장의 재구성', monsterName: '의혹의 안개', rewards: { fountainPens: 35, currency: 10 },
                stageStory: [
                    { character: '한 현', expression: 'neutral', position: 'right', dialogue: '서점 주인인 제가 보기에도, 이 현장의 책 배치는 너무 인위적입니다. 평소 박민준 작가의 습관과 달라요.' },
                    { character: '서도진', expression: 'neutral', position: 'left', dialogue: '범인은 박민준을 잘 아는 사람이야. 하지만 이 현장을 꾸미는 데는 다른 사람의 \'습관\'을 빌려왔지.' } // <-- '습관' 주변의 작은따옴표를 이스케이프 처리 (\')
                ]
            },
            { 
                stageName: '1-5. 용의자의 진술', monsterName: '모방범의 그림자', rewards: { fountainPens: 40, currency: 15 },
                stageStory: [
                    { character: null, dialogue: '가장 유력한 용의자 A는 사건 당시 완벽한 알리바이를 제시했다. 그의 진술은 한 치의 오차도 없었다.' },
                    { character: '박연우', expression: 'neutral', position: 'right', dialogue: '이 구조식처럼, 진술은 완벽한 고리입니다. 하지만 완벽함 자체가 오히려 의심스럽죠.' }
                ]
            },
            { 
                stageName: '1-6. 알리바이의 허점', monsterName: '모방범의 그림자', rewards: { fountainPens: 45, currency: 15 },
                stageStory: [
                    { character: '강은율', expression: 'neutral', position: 'left', dialogue: '용의자 A가 제시한 시간대 시뮬레이션 결과, 그가 주장한 경로를 벗어난 미세한 시간차가 확인되었습니다.' },
                    { character: null, dialogue: '0.001초의 오차. 아무도 주목하지 않았던 그 작은 오차에서 "모방범의 그림자"가 희미하게 모습을 드러냈다.' }
                ]
            },
            { 
                stageName: '1-7. 미제 사건 파일', monsterName: '모방범의 그림자', rewards: { fountainPens: 50, currency: 20 },
                stageStory: [
                    { character: '백정문', expression: 'serious', position: 'right', dialogue: '이전에 발생했던 미제 사건 파일들과 현장의 "에너지 잔류 패턴"이 일치합니다. 단순 모방이 아닐지도 모릅니다.' },
                    { character: '서도진', expression: 'serious', position: 'left', dialogue: '그렇다면 범인은 과거의 사건을 재연하며, 우리에게 어떤 규칙을 강요하고 있는 거야.' }
                ]
            },
            { 
                stageName: '1-8. 침묵의 증인', monsterName: '모방범의 그림자', rewards: { fountainPens: 55, currency: 20 },
                stageStory: [
                    { character: '윤유준', expression: 'neutral', position: 'left', dialogue: '제가 사건 당일 밤, 박민준 작가의 작업실 근처를 지나가는 사람을 봤어요. 어두워서 얼굴은 못 봤지만... 익숙한 실루엣이었어요.' },
                    { character: null, dialogue: '학생의 사소한 증언. 그것은 완벽하게 짜인 범인의 이야기 속에서 유일하게 침묵하지 않은 진실이었다.' }
                ]
            },
            { 
                stageName: '1-9. 숨겨진 의도', monsterName: '모방범의 그림자', rewards: { fountainPens: 60, currency: 25 },
                stageStory: [
                    { character: '독고유진', expression: 'serious', position: 'right', dialogue: '이 모든 것이 작가인 박민준의 소설을 모방한 것이라면, 범인의 최종 목적은 소설의 "완결"일 겁니다.' },
                    { character: '서도진', expression: 'serious', position: 'left', dialogue: '그리고 그 완결의 장소는... 다음 피해자의 집이 되겠지.' }
                ]
            },
            { 
                stageName: '1-10. 장의 결말 (챕터 보스)', monsterName: '날조된 증거', rewards: { fountainPens: 100, currency: 30 },
                stageStory: [
                    { character: null, dialogue: '모든 단서는 윤필규의 이름으로 모였다. 하지만 그 모든 증거는 너무나도 쉽게 발견되었고, 너무나도 명확했다.' },
                    { character: '도천영', expression: 'serious', position: 'right', dialogue: '이 날조된 증거들 속에 감춰진 진범을 찾아야 합니다. 서 작가.' }
                ]
            },
        ],
    },
    {
        chapterName: '제2장: 미궁 속의 실험',
        stages: [
            { 
                stageName: '2-1. 새로운 가설', monsterName: '모방범의 그림자', rewards: { fountainPens: 70, currency: 10 },
                stageStory: [
                    { character: '도천영', expression: 'neutral', position: 'right', dialogue: '박민준의 시신에서 검출된 독성 물질은 매우 희귀합니다. 저는 이를 "D-성분"이라 명명했습니다.' },
                    { character: '서도진', expression: 'neutral', position: 'left', dialogue: 'D-성분이라... 독성 물질이라면 이 사건은 소설 모방이 아닌 화학 물질 실험과 관련이 있다는 건가?' }
                ]
            },
            { 
                stageName: '2-2. 통제된 변수', monsterName: '모방범의 그림자', rewards: { fountainPens: 75, currency: 10 },
                stageStory: [
                    { character: '윤서천', expression: 'neutral', position: 'right', dialogue: 'D-성분은 제가 5년 전 연구하던 물질입니다. 치사량에 이르면 평온한 상태로 죽음에 이르게 하죠. 마치... 완벽한 자살처럼.' },
                    { character: '서도진', expression: 'serious', position: 'left', dialogue: '당신이 범인인가?' },
                    { character: '윤서천', expression: 'neutral', position: 'right', dialogue: '아뇨, 저는 D-성분이 외부로 유출된 것을 알았을 뿐입니다. 그리고 그것을 회수하려 합니다.' }
                ]
            },
            { 
                stageName: '2-3. 예상치 못한 반응', monsterName: '모방범의 그림자', rewards: { fountainPens: 80, currency: 15 },
                stageStory: [
                    { character: '박연우', expression: 'neutral', position: 'left', dialogue: 'D-성분은 특정 환경에서 예상치 못한 화학적 반응을 일으킵니다. 그 반응이 현장의 잉크 얼룩을 변색시켰을 가능성이 있습니다.' },
                    { character: null, dialogue: '사건은 추리 소설의 영역을 넘어 화학 미스터리로 변해가고 있었다.' }
                ]
            },
            { 
                stageName: '2-4. 오염된 샘플', monsterName: '모방범의 그림자', rewards: { fountainPens: 85, currency: 15 },
                stageStory: [
                    { character: '도천영', expression: 'serious', position: 'right', dialogue: '윤서천이 제공한 D-성분의 샘플은 순도가 너무 높습니다. 실제 박민준의 시신에서 발견된 샘플은 다른 물질과 "오염"되어 있었습니다.' },
                    { character: '서도진', expression: 'neutral', position: 'left', dialogue: '그 오염 물질을 아는 사람, 또는 D-성분을 사용한 후 현장을 조작한 사람이 범인이겠군.' }
                ]
            },
            { 
                stageName: '2-5. 연구자의 윤리', monsterName: '날조된 증거', rewards: { fountainPens: 90, currency: 20 },
                stageStory: [
                    { character: '윤서천', expression: 'serious', position: 'right', dialogue: '제 연구는 인류의 고통 없는 종결을 위한 것이었습니다. 하지만 누군가 제 연구를 살인에 악용하고 있어요.' },
                    { character: null, dialogue: '윤서천은 자신의 비윤리적인 연구에 대한 죄책감과, 자신의 의도와 다른 결과를 낳았다는 분노를 동시에 느끼고 있었다.' }
                ]
            },
            { 
                stageName: '2-6. 잊혀진 약물', monsterName: '날조된 증거', rewards: { fountainPens: 95, currency: 20 },
                stageStory: [
                    { character: '양석민', expression: 'neutral', position: 'left', dialogue: 'D-성분과 오염 물질의 결합 경로를 분석했습니다. 이 결합 방식은 10년 전 폐기된 한 실험실에서만 사용되던 방식입니다.' },
                    { character: null, dialogue: '결합 경로를 따라가자, 사건은 과거의 "잊혀진 약물" 실험과 연결되기 시작했다.' }
                ]
            },
            { 
                stageName: '2-7. 배후의 조력자', monsterName: '날조된 증거', rewards: { fountainPens: 100, currency: 25 },
                stageStory: [
                    { character: '도천영', expression: 'serious', position: 'right', dialogue: '윤필규는 박민준의 편집자였고, 윤서천은 박민준의 대학 후배였습니다. 이 모든 사건은 이 세 사람의 관계에서 시작된 것 같습니다.' },
                    { character: '서도진', expression: 'serious', position: 'left', dialogue: '가장 가까운 곳에 있던 조력자가, 사실은 가장 멀리서 조종하는 배후였을 가능성. 소설의 클리셰는 현실에서 반복되는군.' }
                ]
            },
            { 
                stageName: '2-8. 역추적', monsterName: '날조된 증거', rewards: { fountainPens: 105, currency: 25 },
                stageStory: [
                    { character: '강은율', expression: 'neutral', position: 'left', dialogue: '범인이 사용한 컴퓨터의 접속 기록을 역추적했습니다. 그 기록은 윤필규가 아닌, 또 다른 인물을 가리키고 있습니다.' },
                    { character: null, dialogue: '데이터가 던진 새로운 가설. 윤필규는 진범이 아닌, 진범이 이용하려 했던 또 다른 희생양일지도 모른다.' }
                ]
            },
            { 
                stageName: '2-9. 긴급 상황', monsterName: '날조된 증거', rewards: { fountainPens: 110, currency: 30 },
                stageStory: [
                    { character: '윤유준', expression: 'surprised', position: 'right', dialogue: '윤필규 씨가 위험해요! 방금 윤필규 씨 집에서 수상한 빛이 번쩍였어요!' },
                    { character: '서도진', expression: 'angry', position: 'left', dialogue: '젠장! 늦었나? 서둘러야 해!' }
                ]
            },
            { 
                stageName: '2-10. 비극적인 실험 (챕터 보스)', monsterName: '편집된 진실', rewards: { fountainPens: 180, currency: 40 },
                stageStory: [
                    { character: null, dialogue: '윤필규의 집에서 발견된 것은, 편집된 진실이었습니다. 현장은 완벽했고, D-성분의 흔적은 사라지고 없었습니다.' },
                    { character: '서도진', expression: 'serious', position: 'left', dialogue: '범인은 모든 것을 숨겼어. 이제 진범과 정면으로 맞설 수밖에 없다.' }
                ]
            },
        ],
    }, 
];
            
           const eventDungeons = [
    { name: '1장', monsterName: '의혹의 안개', eventPointReward: 100 },
    { name: '2장', monsterName: '의혹의 안개', eventPointReward: 120 },
    { name: '3장', monsterName: '모방범의 그림자', eventPointReward: 150 },
    { name: '4장', monsterName: '모방범의 그림자', eventPointReward: 180 },
    { name: '5장', monsterName: '날조된 증거', eventPointReward: 220 },
    { name: '6장', monsterName: '날조된 증거', eventPointReward: 250 },
    { name: '7장', monsterName: '날조된 증거', eventPointReward: 300 },
    { name: '8장', monsterName: '편집된 진실', eventPointReward: 350 },
    { name: '9장', monsterName: '편집된 진실', eventPointReward: 400 },
    { name: '10장', monsterName: '편집된 진실', eventPointReward: 500 }
];

           // [이 코드로 기존 const eventStories = [...] 블록 전체를 교체하세요]
const eventStories = [
    {
        title: '고양이 소년',
        content: [
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '이것 좀 보세요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '응?' },
            { character: null, dialogue: '노트북 앞에서 다음 문장을 낑낑대며 고민하는 티가 팍팍 나던 도진의 눈앞에 쓱 내밀어진 것은 현의 휴대전화 액정이었다.' },
            { character: null, dialogue: '동영상이 재생되고 있는 액정. 아니, 왼쪽 위에 생방송이라는 글자가 쓰여 있으니 라이브 영상인가.' },
            { character: null, dialogue: '액정 안에서는 정체를 알 수 없는 게임이 한창 진행되고 있었다. 적을 총으로 쏘아 죽이는 게임인 것만은 알아보겠다.' },
            { character: null, dialogue: '누가 하고 있는 게임인지는 모르겠지만 그는 참 실력이 좋다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '음…….' },
            { character: null, dialogue: '도진이 정말로 게임 화면만을 보고 있으니 현은 답답하다는 듯이 화면의 오른쪽 아래를 가리켰다. 상반신만 보이는 금발 머리의 고양이 소년이 웃는 얼굴로 몸을 흔들고 있다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '응? 이게 뭔데…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '네?' },
            { character: null, dialogue: '현은 들이밀었던 휴대전화를 제 쪽으로 거뒀다. 게임 화면을 확인한 현이 아 뭐야, 하며 작은 탄식을 뱉었다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '그새 갈아 끼우긴. 하나 잡았다고 담배라도 피시나?' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '갈아 끼워? 뭘 잡아?' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '아녜요, 잠깐만 기다려보세요.' }
        ]
    },
    {
        title: '잘 지내는 걸까?',
        content: [
            { character: null, dialogue: '잠시 곁에 서서 휴대전화를 빤히 내려다보던 현은 이윽고 다시 도진의 코앞에 액정을 들이밀었다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(뭐가 달라진 거지…?)' },
            { character: null, dialogue: '도진이 현의 눈치를 보자 현은 또다시 한쪽 눈썹을 찌그러뜨려선 아까와 똑같은 부분을 손가락으로 짚었다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '봐요.' },
            { character: null, dialogue: '금발의 고양이 소년은 온데간데없었다.' },
            { character: null, dialogue: '대신 아는 사람의 상반신이 그곳에 있었다.' },
            { character: null, dialogue: '게임에 집중한 듯 눈을 살짝 가늘게 뜬 얼굴은 기억 속의 그와 여전히 똑같았다. 입고 있는 분홍색 후드 티도, 쓰고 있는 고양이 귀 헤드셋도 똑같다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '도화 씨, 잘 계시네.' }
        ]
    },
    {
        title: '이상한 낌새',
        content: [
            { character: null, dialogue: '허리에 한 손을 짚고 선 현은 어깨를 으쓱이더니 휴대전화를 도진의 시야에서 거뒀다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '글쎄요, 과연 잘 계시는 걸까요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '여기 계실 때랑 똑같으신데…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '저 요즘 시간 날 때마다 도화 씨 방송 보고 있는데. 뭔가뭔가 낌새가 이상하다는 말이죠.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '응? 애청자가 된 거야?' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '전 원래도 가끔 봤어요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '낌새가 이상하다고?' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '예를 들면 이런 거죠.' }
        ]
    },
    {
        title: '반백의 중노동',
        content: [
            { character: null, dialogue: '현은 다시 휴대전화를 조작했다. 카메라 앞에 앉은 도화가 화면에 비친다.' },
            { character: '도화', expression: 'neutral', position: 'left', dialogue: '이사를 하니깐 물건이 어디에 있는지 자꾸 헷갈리는 거 있지?' },
            { character: null, dialogue: '화면 너머로 보이는 도화의 방은 그때와 똑같았다.' },
            { character: null, dialogue: '마치 도화의 방을 실패한 도시의 아파트에서 뚝 떼어내선, 성공한 도시 서울의 이름 모를 아파트에 그대로 가져다 붙인 듯했다.' },
            { character: '도화', expression: 'neutral', position: 'left', dialogue: '아까도 어, 이 밑에 전선이 난리도 아니라 케이블 타이를 찾고 있었거든. 이사 오기 전에는 분명히 근처 서랍에 넣어뒀었는데 오늘 찾아보니까 없데?' },
            { character: '도화', expression: 'neutral', position: 'left', dialogue: '내가 뭐 이삿짐센터를 따로 쓴 것도 아니고 포터만 불러서 싹 옮겨서 일주일 내내 자~알 정리하고 와 이 정도면 진짜 반백치고 중노동 했다 수고했다 백도화 하고.' },
            { character: '도화', expression: 'neutral', position: 'left', dialogue: '짜장면도 한 그릇 먹고 소화도 시킬 겸 2주 정도 푹 쉬고 이제 일상생활로 돌아와서 다시 광대놀음 하려고 각을 잡았는데 어? 자꾸 이런 찐빠들이 나는 거야. 아 말이 안 돼요.' }
        ]
    },
    {
        title: '한순간의 사고',
        content: [
            { character: '서도진', expression: 'neutral', position: 'right', dialogue: '반백 아닐 텐데…….' },
            { character: '한 현', expression: 'neutral', position: 'left', dialogue: '방송적 과장이죠. 옆에 채팅창 보세요.' },
            { character: '서도진', expression: 'neutral', position: 'right', dialogue: '채팅……. ‘형 치매 보험 들었어?’.' },
            { character: '한 현', expression: 'neutral', position: 'left', dialogue: '아니 뭐 그런 걸 읽어요. ‘형 엄살 좀 그만해’, ‘혼자 몇년 일찍 사네’.' },
            { character: '서도진', expression: 'neutral', position: 'right', dialogue: '치매라니…….' },
            { character: '한 현', expression: 'neutral', position: 'left', dialogue: '이제 채팅창 보지 마세요.' },
            { character: null, dialogue: '너스레를 떨며 어깨를 으쓱이던 화면 속의 도화가 쉴 새 없이 올라가는 채팅창을 잠시 주시했다.' },
            { character: null, dialogue: '한 손이 카메라 범위 밖으로 넘어가는가 싶더니 로고 하나 없는 종이컵을 들고 돌아온다.' },
            { character: '도화', expression: 'neutral', position: 'left', dialogue: '치매 보험? 너 내가 추리 게임 단서 조합하는 거 보고도 그런 말이 나오냐.' },
            { character: '도화', expression: 'neutral', position: 'left', dialogue: '엄살 아니라니까? 너희도 가구 옮기고 오만잡걸 다 정리하고 해 봐라. 내가 보장하는데 너흰 2주 안에 못 일어나.' },
            { character: '도화', expression: 'neutral', position: 'left', dialogue: '와 잠실날다람쥐님 이사 비용 오만 원 감사합니다. 이걸 일찍 주셨으면 내가 이삿짐센터를 부르는 건데.' },
            { character: '도화', expression: 'neutral', position: 'left', dialogue: '얘들아 백도화/사건사고가 무슨 말이냐? 자 농담이고 오늘 할 건…… 아!' },
            { character: null, dialogue: '한순간의 사고였다. 채팅창을 보며 낄낄대던 도화가, 들고 있던 종이컵을 허공에 내려둔 것이다. 아마 그보다 조금 앞의 책상에 두려고 했던 거겠지.' },
            { character: null, dialogue: '투명한 생수가 잔 밖으로 흘러넘쳤다. 미간을 찌푸린 도화가 종이컵을 줍기 위해 몸을 앞으로 숙인다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '스톱!' }
        ]
    },
    {
        title: '붉게 물든 쇄골',
        content: [
            { character: null, dialogue: '현이 액정을 두드려 동영상을 멈췄다. 몸을 숙인 도화의 오뚝한 콧날이 두드러지는 지점이었다.' },
            { character: null, dialogue: '현은 두 손가락을 벌려 동영상의 어느 한 지점을 줌인했다. 후드티 안쪽으로 보이는 쇄골 지점이다. 볼록 튀어나온 목젖이 흐린 그림자를 만들고 움푹 들어간 쇄골의 굴곡이 짙은 그림자를 만드는.' },
            { character: null, dialogue: '분홍색 후드티 안에는 받쳐 입은 게 없는지 그림자가 졌는데도 살색이 노골적이다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '뭐, 뭐 하는 거야?' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '여길 잘 보시라고요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '안 그래도 돼…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '네? 이상한 소리 하지 마세요. 보시라니깐요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '이, 이상한 소리 하지 마!' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '예?' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '이러면 안 될 거 같아…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '아뇨, 안 되는 짓을 하는 건 이렇게 애청자들을 기만하는 백도화 씨죠.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '기만……?' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '그러니까, 여기 보세요.' },
            { character: null, dialogue: '도화의 매끈한 살이 여전히 화면을 가득 채우고 있었지만. 현의 손가락이 닿은 곳은 조금 달랐다.' },
            { character: null, dialogue: '살색이 아니었다.' },
            { character: null, dialogue: '쇄골에서 어깨 쪽으로 조금 떨어진 부근. 후드티로 가려져 잘은 보이지 않지만, 분명 붉게 물들어 있었다.' },
            { character: null, dialogue: '어깨에서 시작된 울긋불긋한 흔적이 옷에 가려 보이지 않는 가슴께까지 길게 번져 있었다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '어…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '멍들었죠.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '그, 그렇네.' }
        ]
    },
    {
        title: '사라지지 않는 흔적',
        content: [
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '다른 영상에서도 이래요. 이때만 일시적으로 멍이 든 게 아니란 말이죠.' },
            { character: null, dialogue: '액정을 물린 현이 휴대전화를 툭툭 조작했다. 9월 초의 영상과 9월 말의 영상과 10월 초의 영상과…….' },
            { character: null, dialogue: '그 안에서 웃고 화내는 도화의 어깨 부근은 항상 붉게 물들어 있었다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '이 뒤로는 도화 씨도 뭔가 깨달은 게 있는지 안에 흰 티를 입으시더라고요. 그래서 요즘은 확인할 수가 없어요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '그냥 날이 추워져서 한 겹 더 입으신 건 아닐까…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '집에 있으면 안 춥거든요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(어깨부터 가슴까지 이어진 멍 자국. 꼭 무거운 뭔가를 하루 종일 맨 것처럼 남은 붉은 자국…….)' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(방송을 하지 않을 땐 누군가한테 협박당해서 천장에 대롱대롱 매달려있기라도 하는 건가…….)' }
        ]
    },
    {
        title: '낮춘 목소리',
        content: [
            { character: null, dialogue: '차량, 하며 출입문에 달린 자그마한 종이 울렸다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(아직 일곱 시도 안 됐는데 필규가 왔나? 그럴 리가 없는데.)' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(아니면 이 시간에 손님이……?)' },
            { character: null, dialogue: '문 앞에서 익숙한 얼굴의 손님이 멍한 눈을 하고 서 있었다.' },
            { character: null, dialogue: '그는 창가 테이블에 모여 있는 사장과 손님을 잠시 쳐다보다가 고개를 살짝 숙였다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(아, 그 사람이다. 몇 달 전에 이사 온……. 서점에도 자주 들르는…….)' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(나는 많이 마주친 적 없지만 분명 필규는 출근하면서 자주 뵌다고 했지.)' },
            { character: '윤필규', expression: 'neutral', position: 'right', dialogue: '(학교 선생님이시래요. 경기도에 사시는데 발령이 서울 쪽으로 나서 아예 집을 구하셨다나 봐요.)' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(처음 보는 사람이랑 그런 얘기도 하고 필규는 정말 대단하지…….)' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '어서 오세요.' },
            { character: null, dialogue: '인사를 받은 손님은 곧장 문제집 코너로 걸어갔다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(그러고 보니 현이도 비슷한 얘기를 해 줬어.)' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '(고등학교 수학 선생님이시래요. 경기도에 사는데 발령이 서울로 나서 집을 구하셨대요.)' },
            { character: null, dialogue: '손님은 문제집 서가 안으로 몸을 숨겼다. 바스락바스락 스윽 하며 책을 선별하는 소리가 들린다.' },
            { character: null, dialogue: '두 사람은 손님의 기척을 의식하며 시선을 교환하다가, 이내 한껏 목소리를 낮춰 말문을 틀었다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '낌새가 안 좋죠? 역시. 작가님도 그렇게 생각하시죠?' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(손님이 있을 땐 작가님이라는 단어를 쓰지 않아 줬으면 좋겠는데.)' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '어깨부터 가슴까지 멍이 들 일이 뭐가 있냐고요. 그것도 하루이틀도 아니고 한 달 내내요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '으음, 어디 묶여 계시는 거 아냐…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '그런데 방송할 때는 풀려나고요?' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '그러면, 도화 씨를 묶었다가 풀었다가 하는 상대는 도화 씨의 방송으로 뭔가의 이득을 본다고 봐야 하는데.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '묶어놓는 행위랑 보이게 하는 행위는 경향성이 너무 정반대죠.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '우리 너무 당연하게 도화 씨가 묶여있다고 전제하고 있는 거 아냐…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '그럴만한 일을 하시잖아요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '그럴만한 일을 하시기는 하지…….' }
        ]
    },
    {
        title: '소중한 배낭',
        content: [
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '계산을 좀 할 수 있을까요?' },
            { character: '한 현', expression: 'neutral', position: 'left', dialogue: '어헉? 네!' },
            { character: null, dialogue: '대체 언제 다가왔는지 모를 손님이 여전히 멍한 눈으로 두 사람을 바라보고 있었다. 한 손에 들린 매끈한 표지의 수학 문제집은 아래로 축 처진 채다.' },
            { character: null, dialogue: '현은 답잖게 허둥지둥 카운터로 돌아갔다. 손님은 그를 뒤따르지 않았다. 도진의 어깨 너머에 있는 무언가를 빤히 보고 있다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(어, 내 노트북 화면을…….)' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(보고 있어……?)' },
            { character: null, dialogue: '도진이 쾅 하고 노트북을 닫았다.' },
            { character: null, dialogue: '선생은 뿔테 안경 뒤의 졸려 보이는 눈을 한 번 끔뻑이더니 시선을 도진에게로 옮긴다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '아, 아, 음, 왜, 아, 안녕하세요?' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '소설을 쓰시나요?' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '음, 그, 웨, 웹소설을, 조금.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '그러시군요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '저, 계, 계산.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '결혼을 하셨나요?' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '네?' },
            { character: null, dialogue: '손님의 시선이 도진의 얼굴에서 손으로 떨어진다. 도진의 시선 역시 덩달아 추락한다. 왼손 약지에서 반지가 반짝이고 있다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '네, 네.' },
            { character: null, dialogue: '도진은 긍정을 표했다. 결혼한 부부와 거진 동일한 생활을 하고 있음이 분명했다.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '아이는요?‘' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '네?' },
            { character: null, dialogue: '헥? 에 가까운 발음이었지만 어찌저찌 의미는 통할 것이었다.' },
            { character: null, dialogue: '손님을 기다리던 현은 불길하다는 표정을 만면에 걸고는 슬금슬금 이쪽으로 돌아오고 있었다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '어, 없, 없는데요.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '그러시군요.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '그, 그건 갑자기, 왜, 물어보시는지…….' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '손님, 계산해 드릴게요.' },
            { character: null, dialogue: '도진을 빤히 내려다보던 그가 뒤를 휙 돌았다. 그 기세에 현도 흠칫하며 뒤로 한 걸음 물러난다.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '사장님은 결혼을 안 하셨지요?' },
            { character: null, dialogue: '고저가 그다지 없는 나긋한 톤의 목소리는 학생들을 지도하는 데에 한 역할 톡톡히 할 것 같다. 사람을 겁박하는 데에도 쓸모가 있을 것 같다는 문제가 있긴 하다.' },
            { character: null, dialogue: '현은 비즈니스 미소가 되다 만 애매한 미소를 입가에 걸고 만다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '네, 아직 상대가 없어서.' },
            { character: null, dialogue: '그러는 선생님은요, 하듯이 손님의 왼손으로 노골적인 시선을 보낸다.' },
            { character: null, dialogue: '도진도 따라 훔쳐보면, 그의 손에는 아무런 치장이 되어 있지 않다.' },
            { character: null, dialogue: '시선을 느낀 그는 제 왼손을 들어 내려다보더니.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '저는 했었습니다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '아, 이거 실례가…….' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '아닙니다. 안사람은 떠났어도 딸아이랑 같이 열심히 살아가고 있으니까요.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '아, 따님이?' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '네. 지금은 고등학교 기숙사에서 타지 생활을 하고 있습니다만……. 항상 마음은 함께죠.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '그래서인지, 저는 알 것 같군요. 어깨와 가슴의 붉은 멍 말입니다.' },
            { character: '한 현', expression: 'neutral', position: 'right', dialogue: '네? 아니, 그걸 다 듣고 계셨어요?' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '아, 예……. 귀는 닫을 수 없는 법이라서요.' },
            { character: null, dialogue: '손님은 들고 있던 커다란 문제집을 옆구리에 끼었다.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '저도 그런 멍이 한때 생겼던 적이 있습니다. 전혀 익숙하지 않은 걸 매일 같이 매어야 했을 때가 있었거든요.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '끈이 짧아서 불편한 배낭이면 차라리 다행이죠. 어떻게든 편한 자세를 찾아서 매면 되는 일이니까요.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '하지만 그건 제가 편해서는 안 되는 배낭이었습니다. 배낭이 편한 자세를 찾아 그 자세를 유지해야만 했어요.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '그렇지 않으면 소중한 배낭에게 탈이 날 수도 있으니까…….' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(어라……? 설마, 아니…….)' },
            { character: null, dialogue: '눈동자를 굴리니 경악을 숨기지 못하는 현의 얼굴이 시야의 가장자리에 비쳤다.' },
            { character: null, dialogue: '도진은 눈을 질끈 감고 고개를 돌렸다.' },
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '(아아, 거짓말……. 설마 굳이 서울까지 이사하신 이유도…….)' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '두 분이 아이가 없으셔서 깨닫지 못하신 것 같습니다. 저는 바로 떠오르더군요. 그건 아기띠의 자국이라고.' }
        ]
    },
    {
        title: '왼손의 반지',
        content: [
            { character: null, dialogue: '엘리베이터에 선객이 있었다. 몇 달 전 최상층으로 이사 온 이웃이다.' },
            { character: null, dialogue: '그는 엘리베이터 문간을 넘는 필규를 보고 작게 고개를 숙여 인사했다. 필규도 덩달아 목례한다.' },
            { character: '윤필규', expression: 'neutral', position: 'left', dialogue: '안녕하세요, 날이 부쩍 추워졌네요.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '정말요, 아이들도 겉옷을 챙기기 시작하더군요.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '난방을 틀어달라고 성화입니다. 아직은 낮 기온이 따뜻해서 그럴 수 없다고 해도 억지를 부리는 게 참 아이들 다워요.' },
            { character: null, dialogue: '필규는 순수하게 마음에서 우러나온 미소를 짓는다. 아이들, 이라는 단어에서 연상되는 푸릇한 이미지가 있었다.' },
            { character: null, dialogue: '엘리베이터는 곧 지상에 다다른다. 문이 열리고 필규가 먼저 발걸음을 옮겼다.' },
            { character: '윤필규', expression: 'neutral', position: 'left', dialogue: '그럼 좋은 하루 되세요.' },
            { character: null, dialogue: '고개를 돌려 등 뒤의 이웃에게 가볍게 인사를 건넸다.' },
            { character: '선생', expression: 'neutral', position: 'right', dialogue: '아아 예, 좋은 하루 되세요.' },
            { character: null, dialogue: '왠지 시선을 아래로 보내고 있던 그가 적당히 인사를 받았다.' },
            { character: '윤필규', expression: 'neutral', position: 'left', dialogue: '(뭘 보고 계셨던 거지?)' },
            { character: null, dialogue: '상함을 느끼기도 잠시, 관성적으로 자가용에 올라타 시동을 건 필규는 폭이 썩 넓지 않은 아파트 정문을 지나 도로 다운 도로로 나간 뒤에야 그의 시선이 어디에 닿아 있었는지를 깨달았다.' },
            { character: null, dialogue: '운전대 위의 왼손에서 어떤 함의를 띤 반지가 아침의 희끄무레한 빛을 받아 반짝이고 있었다.' }
        ]
    }
];

// ✅ 1단계: 아래 코드를 game_data.js 파일에 추가하세요.

// [이 코드로 기존 const eventStoryPart2 = {...} 블록 전체를 교체하세요]
const eventStoryPart2 = {
    // --- 전반부 스토리 (선택지 때문에 이 부분은 필요합니다) ---
    firstHalf: [
        // 장면 0
        {
            character: '서도진', expression: 'serious', position: 'left',
            dialogue: '사건 현장에서 두 개의 결정적인 증거가 나왔어. 하나는 피해자의 다잉 메시지, 다른 하나는... 용의자의 지문이 묻은 찻잔이야.'
        },
        // 장면 1
        {
            character: '도천영', expression: 'neutral', position: 'right',
            dialogue: '데이터는 거짓말을 하지 않죠. 하지만 다잉 메시지는 해석의 여지가 있고, 지문은 조작될 수 있습니다.'
        },
        // 장면 2
        {
            character: null,
            dialogue: '두 개의 상반된 단서. 어떤 것을 더 신뢰해야 할까?'
        },
        // 장면 3 (선택지)
        {
            character: '서도진', expression: 'neutral', position: 'left',
            dialogue: '이제 선택해야 해. 어떤 증거를 중심으로 수사를 진행할지...',
            choices: [
                { text: '다잉 메시지를 믿는다.', nextScene: 4 },
                { text: '결정적인 지문을 믿는다.', nextScene: 5 }
            ]
        },
        // 장면 4 (분기 1: 다잉 메시지)
        {
            character: null,
            dialogue: '당신은 피해자가 마지막 힘을 다해 남긴 메시지에 더 무게를 두기로 했다.',
            jumpTo: 6 
        },
        // 장면 5 (분기 2: 지문)
        {
            character: null,
            dialogue: '당신은 과학적이고 물리적인 증거인 지문을 더 신뢰하기로 했다.',
            jumpTo: 6 
        },
        // 장면 6 (공통 장면)
        {
            character: '서도진', expression: 'serious', position: 'left',
            dialogue: '좋아, 그 방향으로 수사를 진행하지. 우리의 선택이 어떤 결과로 이어질지는... 아직 아무도 몰라.',
            choices: [
                {
                    text: '전반부 스토리 완료',
                    statId: 'event_part2_final_choice',
                    isFinalChoice: true
                }
            ]
        }
    ],
    // --- 후반부 스토리 (미니 이벤트이므로 비워둡니다) ---
    secondHalf: [] // <--- 이 부분을 빈 배열로 만듭니다.
};

            const eventShopItems = [
                { id: 'event_ssr_sensei', name: '[소중한 배낭] 선생', type: 'card', cost: 15000, limit: 1, itemData: characters.find(c => c.name === '[소중한 배낭] 선생') },
{ id: 'event_sr_hyeon', name: '[백청자] 한 현', type: 'card', cost: 5000, limit: 1, itemData: characters.find(c => c.name === '[백청자] 한 현') },
{ id: 'event_r_dohwa', name: '[목줄 매인 고양이] 백도화', type: 'card', cost: 1000, limit: 5, itemData: characters.find(c => c.name === '[목줄 매인 고양이] 백도화') },
                { id: 'gems_100', name: '보석 100개', type: 'currency', cost: 1000, limit: 5, itemData: 100 },
                { id: 'gems_500', name: '보석 500개', type: 'currency', cost: 4500, limit: 2, itemData: 500 }
            ];


            // ✅ 이 코드로 기존 mainStories 변수 전체를 교체해주세요.
            const mainStories = [
                {
                    title: '프롤로그: 비 내리는 밤',
                    dungeonToUnlock: null,
                    content: [
                        { character: '서도진', expression: 'angry', position: 'left', dialogue: '젠장, 이럴 때가 아닌데...' },
                        { character: null, dialogue: '스스로에게 짜증을 내며 펜을 고쳐 쥐는 순간이었다. 쿵, 쿵, 쿵. 낡은 현관문이 둔탁하게 울렸다.' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '서 작가, 오랜만이군. 혹시... 박민준하고 연락 닿았나?' },
                        { character: '서도진', expression: 'surprised', position: 'left', dialogue: '아니, 그 녀석은 마감 때면 동굴로 들어가는 놈이잖아. 왜?' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '오늘 밤, 박민준이 죽었어.' },
                        { character: '서도진', expression: 'surprised', position: 'left', dialogue: '...' }
                    ]
                },
                {
                    title: '1장: 첫 번째 사건',
                    dungeonToUnlock: '1-10', // ✅ '제1장'의 마지막 스테이지 클리어 조건
                    content: [
                        { character: null, dialogue: '박민준의 작업실은... 기묘했다. 마치 누군가 연출이라도 한 것처럼, 모든 것이 지나치게 깔끔했다.' },
                        { character: null, dialogue: '흩어진 원고들, 쓰러진 잉크병, 심지어는 바닥에 그어진 핏자국까지도 마치 정교하게 계산된 소품처럼 보였다.' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '자살로 종결될 것 같군. 유서도 발견됐고, 외부 침입의 흔적도 없으니.' },
                        { character: '서도진', expression: 'serious', position: 'left', dialogue: '아니, 이건 자살이 아니야. 이건... 메시지야.' },
                        { character: null, dialogue: '그의 눈이 작업실 한구석, 박민준이 아끼던 한정판 만년필 케이스에 멈췄다. 케이스는 비어 있었다.' },
                        { character: '서도진', expression: 'neutral', position: 'left', dialogue: '박민준은 왼손잡이였어. 하지만 바닥에 떨어진 펜은 오른손잡이용이야.' },
                        { character: '도천영', expression: 'neutral', position: 'right', dialogue: '그리고 그가 마지막으로 집필하던 원고의 제목은, \'완벽한 자살\'이라...' },
                        { character: '서도진', expression: 'serious', position: 'left', dialogue: '이건 자살로 위장된 타살이야. 범인은 박민준의 소설을 모방해서 현장을 꾸민거고.' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '좋아. 경찰이 안 움직인다면, 우리가 직접 움직이면 되지. 나와 함께 이 소설의 결말을 확인해 보겠나?' }
                    ]
                },
                {
                    title: '2장: 어둠 속의 조력자',
                    dungeonToUnlock: '2-10', // ✅ '제2장'의 마지막 스테이지 클리어 조건
                    content: [
                        { character: null, dialogue: '수사는 난항에 부딪혔다. 용의선상은 넓었고, 범인이 남긴 단서는 교묘하게 조작된 것들뿐이었다.' },
                        { character: '서도진', expression: 'neutral', position: 'left', dialogue: '막다른 길이군...' },
                        { character: null, dialogue: '그때, 의문의 전화 한 통이 걸려왔다. 자신을 \'의사\'라고만 밝힌 목소리는 박민준의 시신에서 특수한 성분이 검출되었다는 정보를 흘렸다.' },
                        { character: null, dialogue: '그리고 그 성분을 만들 수 있는 사람은 극소수라는 말과 함께 낡은 연구소의 주소를 남기고는 전화를 끊었다.' },
                        { character: '도천영', expression: 'neutral', position: 'right', dialogue: '반신반의하며 찾아간 연구소는 폐허나 다름없군.' },
                        { character: null, dialogue: '하지만 그곳에서 두 사람은 뜻밖의 인물과 마주친다. 윤서천. 한때 촉망받는 화학자였으나, 비윤리적인 실험으로 학계에서 퇴출된 남자였다.' },
                        { character: '서도진', expression: 'surprised', position: 'left', dialogue: '당신이 왜 여기에...?' }
                    ]
                },
                {
                    title: '3장: 마지막 퍼즐',
                    dungeonToUnlock: null, // ✅ 예시: 3장은 아직 구현되지 않았으므로 null
                    content: [
                        { character: '서도진', expression: 'neutral', position: 'left', dialogue: '계속해서 위화감이 느껴져. 현장에서 발견된 단서들, 의사의 제보, 윤서천의 알리바이까지...' },
                        { character: '서도진', expression: 'serious', position: 'left', dialogue: '모든 것이 너무나도 완벽하게 맞아떨어지는 게 오히려 부자연스러워. 마치 잘 짜인 각본처럼.' },
                        { character: null, dialogue: '그 순간, 도천영에게서 전화가 걸려왔다. 박민준의 유서 필적이, 그의 담당 편집자였던 윤필규의 필적과 상당 부분 일치한다는 감정 결과가 나왔다는 것이다.' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '윤필규... 언제나 묵묵히 두 사람의 뒤에서 작품을 도왔던 남자. 그는 언제나 조용했고, 눈에 띄지 않았지.' },
                        { character: '서도진', expression: 'surprised', position: 'left', dialogue: '하지만 그랬기에, 모두를 속일 수 있었던 건가...!' },
                        { character: '서도진', expression: 'serious', position: 'left', dialogue: '이 비극적인 소설의 진정한 작가는, 바로 가장 가까이에 있었던 그였어.' },
                        { character: null, dialogue: '이제 남은 것은 마지막 장을 넘기는 것뿐이었다. 진실이라는 이름의, 잔혹한 결말을.' }
                    ]
                }
            ];

            // --- 업적 데이터 (수정 및 보상 추가) ---
            const achievements = [
                // 1. 뽑기 관련
                { id: 'ach_001', title: '첫걸음', description: '누군가의 서고에서 1회 뽑기', condition: (state) => state.stats.totalPulls >= 1, reward: { currency: 10 } },
                { id: 'ach_002', title: '수집의 시작', description: '누군가의 서고에서 10회 뽑기', condition: (state) => state.stats.totalPulls >= 10, reward: { currency: 50 } },
                { id: 'ach_003', title: '대량 집필', description: '누군가의 서고에서 50회 뽑기', condition: (state) => state.stats.totalPulls >= 50, reward: { currency: 100 } },
                
                // 2. 카드 획득 관련
                { id: 'ach_004', title: '인연의 실', description: '등장인물 10종류 수집', condition: (state) => new Set(state.inventory.map(c => c.name)).size >= 10, reward: { currency: 50 } },
                { id: 'ach_005', title: '탐정의 자질', description: 'SSR 등급 등장인물 1장 획득', condition: (state) => state.inventory.some(c => c.rarity === 'SSR'), reward: { currency: 100 } },
                
                // 3. 성장/육성 관련
                { id: 'ach_007', title: '퇴고의 기본', description: '등장인물을 1회 퇴고하기', condition: (state) => state.inventory.some(c => c.level >= 1), reward: { fountainPens: 50 } }, // ✨ 보상 추가 (만년필 50개)
                { id: 'ach_008', title: '개정판 입문', description: '개정 레벨이 1 이상인 카드 1장 보유', condition: (state) => state.inventory.some(c => c.revision >= 1), reward: { currency: 70 } },
                { id: 'ach_009', title: '최고의 필력', description: 'SSR 카드를 최대 레벨(+9)까지 퇴고', condition: (state) => state.inventory.some(c => c.rarity === 'SSR' && c.level >= 9), reward: { currency: 200 } },
                
                // 4. 전투/스테이지 관련
                { id: 'ach_010', title: '첫 독서', description: '스테이지 1-1 클리어', condition: (state) => state.clearedStages.includes('1-1'), reward: { fountainPens: 50 } }, // ✨ 보상 추가 (만년필 50개)
                { id: 'ach_011', title: '1장 완독', description: '제1장(1-10) 모두 클리어', condition: (state) => state.clearedStages.includes('1-10'), reward: { bookmarks: 5 } },
                { id: 'ach_012', title: '2장 완독', description: '제2장(2-10) 모두 클리어', condition: (state) => state.clearedStages.includes('2-10'), reward: { bookmarks: 10 } },
                
                // 5. 기타 기능/재화 관련
                { id: 'ach_013', title: '넓어진 서재', description: '보관함 1회 확장', condition: (state) => state.capacity > 100, reward: { currency: 30 } },
                { id: 'ach_014', title: '잉크 부자', description: '만년필 1,000개 이상 보유', condition: (state) => state.fountainPens >= 1000, reward: { currency: 100 } },
            ];
			
			// --- 인연(Synergy) 데이터 ---
            const synergies = [
                {
                    name: '탐정과 조수',
                    description: '덱 전체 HP +10%',
                    condition: (deck) => deck.some(c => c.faction === '탐정') && deck.some(c => c.faction === '조수'),
                    applyBonus: (card) => { card.stats.hp = Math.floor(card.stats.hp * 1.10); }
                },
                {
                    name: '쫓는 자와 쫓기는 자',
                    description: '덱 전체 ATK +10%',
                    condition: (deck) => deck.some(c => c.faction === '탐정') && deck.some(c => c.faction === '범인'),
                    applyBonus: (card) => { card.stats.atk = Math.floor(card.stats.atk * 1.10); }
                },
                {
                    name: '편집자와 소설가',
                    description: '서도진 & 윤필규 ATK +15',
                    condition: (deck) => deck.some(c => c.baseName === '서도진') && deck.some(c => c.baseName === '윤필규'),
                    applyBonus: (card) => { if (card.baseName === '서도진' || card.baseName === '윤필규') card.stats.atk += 15; }
                },
                {
                    name: '우애 나쁜 형제',
                    description: '윤필규 & 윤서천 DEF +15',
                    condition: (deck) => deck.some(c => c.baseName === '윤필규') && deck.some(c => c.baseName === '윤서천'),
                    applyBonus: (card) => { if (card.baseName === '윤필규' || card.baseName === '윤서천') card.stats.def += 15; }
                },
                {
                    name: '저 없으면 안 되죠?',
                    description: '서도진 & 한 현 HP +20%',
                    condition: (deck) => deck.some(c => c.baseName === '서도진') && deck.some(c => c.baseName === '한 현'),
                    applyBonus: (card) => { if (card.baseName === '서도진' || card.baseName === '한 현') card.stats.hp = Math.floor(card.stats.hp * 1.20); }
                },
                {
                    name: '눈앞에서 사람이 떨어졌다',
                    description: '윤서천 & 도천영 ATK +12%',
                    condition: (deck) => deck.some(c => c.baseName === '윤서천') && deck.some(c => c.baseName === '도천영'),
                    applyBonus: (card) => { if (card.baseName === '윤서천' || card.baseName === '도천영') card.stats.atk = Math.floor(card.stats.atk * 1.12); }
                },
                {
                    name: '목숨줄을 붙잡고 계시니까요',
                    description: '독고유진 & 양석민 DEF +20%',
                    condition: (deck) => deck.some(c => c.baseName === '독고유진') && deck.some(c => c.baseName === '양석민'),
                    applyBonus: (card) => { if (card.baseName === '독고유진' || card.baseName === '양석민') card.stats.def = Math.floor(card.stats.def * 1.20); }
                },
                {
                    name: '너무 티나는 짝사랑',
                    description: '박연우 & 강은율 HP/DEF +10%',
                    condition: (deck) => deck.some(c => c.baseName === '박연우') && deck.some(c => c.baseName === '강은율'),
                    applyBonus: (card) => {
                        if (card.baseName === '박연우' || card.baseName === '강은율') {
                            card.stats.hp = Math.floor(card.stats.hp * 1.10);
                            card.stats.def = Math.floor(card.stats.def * 1.10);
                        }
                    }
                }
            ];
			
			// --- 캐릭터 표정 이미지 데이터 ---
            const characterPortraits = {
                '서도진': {
                    neutral: 'https://i.imgur.com/9AoLI6I.png',
                    serious: 'https://i.imgur.com/ERUGX0P.png',
                    surprised: 'https://i.imgur.com/IayOWqf.png',
                    angry: 'https://i.imgur.com/ERUGX0P.png',
                },
                '도천영': {
                    neutral: 'https://i.imgur.com/svV5WKn.png',
                    serious: 'https://i.imgur.com/HlApnIL.png',
                },
                '윤필규': {
                    neutral: 'https://i.imgur.com/x6rfl1m.png'
                },
                '강은율': {
                    neutral: 'https://placehold.co/400x800/0bc5ea/ffffff?text=강은율',
                    serious: 'https://placehold.co/400x800/0987a0/ffffff?text=강은율'
                },
                '박연우': {
                    neutral: 'https://placehold.co/400x800/dd6b20/ffffff?text=박연우'
                },
                '백정문': {
                    neutral: 'https://placehold.co/400x800/f687b3/ffffff?text=백정문',
                    serious: 'https://placehold.co/400x800/d53f8c/ffffff?text=백정문'
                },
                '양석민': {
                    neutral: 'https://placehold.co/400x800/2f855a/ffffff?text=양석민',
                    serious: 'https://placehold.co/400x800/22543d/ffffff?text=양석민'
                },
                '독고유진': {
                    neutral: 'https://placehold.co/400x800/805ad5/ffffff?text=독고유진',
                    serious: 'https://placehold.co/400x800/553c9a/ffffff?text=독고유진'
                },
                '윤서천': {
                    neutral: 'https://i.imgur.com/Ruo7GXd.png',
                    serious: 'https://i.imgur.com/L6RdFz9.png'
                },
                '한 현': {
                    neutral: 'https://i.imgur.com/0F4cRdF.png'
                },
                '윤유준': {
                    neutral: 'https://placehold.co/400x800/c53030/ffffff?text=윤유준',
                    surprised: 'https://placehold.co/400x800/e53e3e/ffffff?text=윤유준'
                },
				'선생': { 
                    neutral: 'https://placehold.co/400x800/8B4513/ffffff?text=선생'
                },
                // 👇 [신규 추가 2]
                '백도화': {
                    neutral: 'https://placehold.co/400x800/FFC0CB/000000?text=백도화'
                }
            };
			
			const rarityProbabilities = { 'SSR': 3, 'SR': 12, 'R': 35, 'N': 50 };
            const eventRarityProbabilities = { 'SSR': 6, 'SR': 14, 'R': 30, 'N': 50 };
            const EVENT_CHARACTER_NAME = '[결혼 반지는 아니지만] 서도진';
            const EVENT_START_DATE = new Date('2025-10-26T00:00:00');
            const EVENT_END_DATE = new Date('2025-11-9T23:59:59');
			// --- 강화(퇴고) 비용 설정 ---

// 레벨 0->1, 1->2, ..., 8->9로 갈 때 필요한 만년필의 기본 비용
// (기존의 ENHANCEMENT_COSTS 배열을 대체합니다)
const ENHANCEMENT_BASE_COSTS = [5, 10, 15, 25, 40, 60, 85, 115, 150];

// 등급별 비용 배율 (N등급이 기준 1.0)
const RARITY_COST_MULTIPLIER = {
    'N': 0.7,   // N등급: 기준 비용의 70% 소모 (가장 저렴)
    'R': 1.0,   // R등급: 기준 비용의 100% 소모 (기준)
    'SR': 1.3,  // SR등급: 기준 비용의 130% 소모
    'SSR': 1.6, // SSR등급: 기준 비용의 160% 소모 (가장 비쌈)
};

// 기존에 있던 ENHANCEMENT_COSTS 또는 enhancementCosts 변수는 삭제하거나 주석 처리해야 합니다.
// (만약 있다면 삭제하세요): const ENHANCEMENT_COSTS = [5, 10, 15, 25, 40, 60, 85, 115, 150];
// (만약 있다면 삭제하세요): const enhancementCosts = [10, 20, 35, 55, 80, 110, 150, 200, 250];

// 나머지 게임 설정 데이터는 그대로 유지합니다.

// ✅ game_data.js 파일 맨 아래에 이 코드를 통째로 추가하세요.

const characterProfiles = {
    '서도진': {
        name: '서도진',
        age: 37,
        job: '추리소설가',
        description: '베스트셀러 추리소설가. 남에게 떠밀려 투고된 글이 공전의 히트를 쳤다. 이런 관심 받고 싶지 않지만, 담당 편집자의 격려로 어찌어찌 글쟁이 생활을 이어나가는 중.',
        imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=서도진+프로필' // 대표 프로필 이미지
    },
    '윤필규': {
        name: '윤필규',
        age: 32,
        job: '편집자',
        description: '서도진의 담당 편집자. 꼼꼼하고 성실한 성격으로, 틈만 나면 슬럼프에 빠지는 서도진과 동거하며 그의 생활을 돕는다. 어디서 나온지 모를 올곧은 정의감을 숨기고 있다.',
        imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=윤필규+프로필'
    },
    '윤서천': {
        name: '윤서천',
        age: 31,
        job: '화학과 대학원생',
        description: '일본에서 박사과정을 밟다가 모종의 사건으로 지도교수를 잃고 귀국한 연구자. 윤필규의 동생이자 도천영의 학생.',
        imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=윤서천+프로필'
    },
    '한 현': {
        name: '한 현',
        age: 32,
        job: '동네서점 주인',
        description: '동네의 작은 서점을 운영하는 평범한 청년. 눈앞의 사건이 그를 다시 현장으로 이끈다.',
        imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=한+현+프로필'
    },
    '도천영': {
        name: '도천영',
        age: 42,
        job: '화학과 부교수',
        description: '서울 모 대학교 화학과 소속 부교수. 아직은 열의가 있는 FM. 연구 주제가 마이너해 학생이 별로 오지 않는 게 고민이다.',
        imageUrl: 'https://placehold.co/300x500/086f83/ffffff?text=도천영+프로필'
    },
    '박연우': {
        name: '박연우',
        age: 46,
        job: '화학과 교수',
        description: '서울 모 대학교 화학과 소속 교수. 한때 학계의 혜성으로 소개되었으나 현재는 열의는 커녕 삶의 의지도 영 보이지 않는다. 그녀의 유기화학 연구실은 학생들의 협조로 어찌어찌 돌아가는 중.',
        imageUrl: 'https://placehold.co/300x500/c05621/ffffff?text=박연우+프로필'
    },
    '강은율': {
        name: '강은율',
        age: 36,
        job: '화학과 조교수',
        description: '서울 모 대학교 화학과 소속 조교수. 언제나 미소를 잃지 않는 긍정적인 성격의 연구자. 제일 좋아하는 건 4f 오비탈.',
        imageUrl: 'https://placehold.co/300x500/0987a0/ffffff?text=강은율+프로필'
    },
    '백정문': {
        name: '백정문',
        age: 32,
        job: '수학자',
        description: '서울 모 대학교 수학과 소속 조교수. 부드러운 성격으로 학생들에게 소소하게 인기가 있다. 개인 시간에는 어쩐지 성격이 다르다는 모양이지만...',
        imageUrl: 'https://placehold.co/300x500/d53f8c/ffffff?text=백정문+프로필'
    },
    '독고유진': {
        name: '독고유진',
        age: 39,
        job: '호러소설가',
        description: '소설보다 더 소설 같은 현실의 사건을 해결하는 호러소설가. 아니, 사실 해결은 나 말고 교수님이 하신다고 봐야 하지만. 손 정도는 빌려드리니까 말이야.',
        imageUrl: 'https://placehold.co/300x500/553c9a/ffffff?text=독고유진+프로필'
    },
    '양석민': {
        name: '양석민',
        age: 48,
        job: '민속학과 교수',
        description: '충청 모 대학 민속학과 소속 교수. 세부전공이 무어나고? 종교학이란다. 인간의 종교도 외우주의 종교도 연구하고 있지. 외우주의 종교가 무어냐고? 후후...',
        imageUrl: 'https://placehold.co/300x500/22543d/ffffff?text=양석민+프로필'
    },
    '윤유준': {
        name: '윤유준',
        age: 29,
        job: '약학과 학생',
        description: '충청 모 대학 약학과 소속 학부생. 오컬트를 좋아하기는 하지만 막 믿지는 않았다고요. 재미삼아 괴담 블로그 정도나 자주 봤을 뿐인데, 설마 이렇게 될 거라고는.',
        imageUrl: 'https://placehold.co/300x500/742a2a/ffffff?text=윤유준+프로필'
    },
	'선생': {
        name: '선생',
        age: 42, // (스토리 기반 추정)
        job: '고등학교 수학 교사',
        description: '실패한 도시로 이사 온 고등학교 수학 선생님. 멍한 눈을 하고 있지만, 아이를 키워본 경험에서 나온 날카로운 통찰력으로 사건의 핵심을 꿰뚫는다.',
        imageUrl: 'https://placehold.co/300x500/8B4513/ffffff?text=선생+프로필'
    },
    // 👇 [신규 추가 2]
    '백도화': {
        name: '백도화',
        age: 37, // (스토리 기반 추정)
        job: '인터넷 방송인',
        description: '고양이 귀 헤드셋을 쓴 스트리머. 하지만 그 이면에는 또다른 얼굴이 숨겨져 있는 모양인데. ',
        imageUrl: 'https://placehold.co/300x500/FFC0CB/000000?text=백도화+프로필'
    }
};

const CURRENT_EVENT_ID = "mini_event_202510_dohwa";


const currentEventInfo = {
    title: "[ON] 승급전 세번만", // 이벤트 제목
    startDate: EVENT_START_DATE, // 기존 이벤트 시작 날짜 변수 사용
    endDate: EVENT_END_DATE,     // 기존 이벤트 종료 날짜 변수 사용
    bannerImageUrl: "https://placehold.co/600x200/5a4fcf/ffffff?text=푸른+잉크와+그림자", // 이벤트 홈 배너 이미지
    description: "'실패한 도시'를 떠난 백도화. 몇 달의 시간이 흐른 뒤, 긴 휴식기를 가졌던 그의 방송이 다시 시작된다. 그러나 방송을 보던 현은 무언가 이상한 낌새를 느끼고, 도진에게 의견을 구하는데….", // 이벤트 설명
    gachaCharacterName: EVENT_CHARACTER_NAME // 기존 이벤트 뽑기 캐릭터 이름 변수 사용
};

const furnitureItems = [
    { id: 'desk_wood', name: '낡은 원목 책상', type: 'floor', size: { w: 2, h: 1 }, cost: 100, imageUrl: 'https://i.imgur.com/0tfl9uY.png' },
    { id: 'bookshelf_mystery', name: '미스터리 책장', type: 'wall', size: { w: 1, h: 2 }, cost: 150, imageUrl: 'https://i.imgur.com/ewfr87E.png' },
    { id: 'rug_red', name: '붉은색 러그', type: 'rug', size: { w: 2, h: 2 }, cost: 80, imageUrl: 'https://i.imgur.com/SYin06r.png' },
    { id: 'sofa_leather', name: '가죽 소파', type: 'floor', size: { w: 2, h: 1 }, cost: 200, imageUrl: 'https://i.imgur.com/MrhdmIQ.png' },
    { id: 'plant_potted', name: '관상용 화분', type: 'floor', size: { w: 1, h: 1 }, cost: 50, imageUrl: 'https://i.imgur.com/UbLVLuZ.png' }
];

// --- 캐릭터 SD 이미지 매핑 (없으면 기본 카드 이미지나 플레이스홀더 사용) ---
// 실제 게임에서는 배경이 투명한 귀여운 SD 캐릭터 이미지가 필요합니다.
const chibiImages = {
    '서도진': 'https://placehold.co/60x60/a0aec0/ffffff?text=SD+서도진',
    '윤필규': 'https://placehold.co/60x60/63b3ed/ffffff?text=SD+윤필규',
    // ... 나머지 캐릭터들도 추가
};


















