// --- 게임 설정 ---
            const characters = [
                // name(고유), baseName, rarity, faction, stats, imageUrl, cardImageUrl, dialogues, skills, deathDialogue, story
                { name: '[소설가] 서도진', baseName: '서도진', rarity: 'N', faction: '탐정', stats: { hp: 50, atk: 5, def: 5 }, imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=서도진', cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=서도진', dialogues: ['이야기의 시작은...'], skills: [{ name: '고뇌', dialogue: '음...', power: 1.2, type: 'damage' }], deathDialogue: '마감이...', story: `서재에 앉아 잉크 냄새를 맡는 것이 세상에서 가장 큰 행복이었던 남자, 서도진. 그는 베스트셀러 작가였지만, 세상의 명성보다는 자신만의 이야기 세계에 침잠하는 것을 더 즐겼다. 그의 손끝에서 태어나는 문장들은 때로는 날카로운 추리가 되고, 때로는 비극적인 사랑이 되었다. 독자들은 그의 이야기에 열광했지만, 정작 그 자신은 자신의 이야기가 현실을 침범하리라고는 상상조차 하지 못했다.\n\n그의 서재는 고요했다. 창밖의 도시 소음만이 희미하게 들려올 뿐, 공간을 채우는 것은 오직 오래된 종이 냄새와 그가 내쉬는 깊은 한숨뿐이었다. 벽면을 가득 채운 책들은 그가 걸어온 길이자, 앞으로 나아갈 길을 비추는 등대였다. 하지만 오늘따라 그 등대는 희미했다. 다음 작품의 마감이 코앞이었지만, 이야기의 마지막 조각이 맞춰지지 않았다. 마치 안개 속을 헤매는 기분이었다. 그의 주인공은 범인의 그림자를 쫓고 있었지만, 그 그림자는 손에 잡힐 듯 잡히지 않고 교묘하게 빠져나갔다. "젠장, 이럴 때가 아닌데..." 그는 헝클어진 머리를 거칠게 쓸어 넘겼다.[PAGE_BREAK]그러던 어느 날, 그의 오랜 친구이자 경쟁자였던 작가가 싸늘한 시신으로 발견되었다. 현장은 마치 소설의 한 장면처럼 기묘하게 꾸며져 있었고, 경찰은 단순 사고로 종결하려 했다. 하지만 서도진은 직감했다. 이것은 사고가 아니다. 누군가가 의도적으로 만들어낸, 잔혹한 이야기의 시작이라는 것을. 그는 친구의 억울한 죽음의 진실을 밝히기 위해, 그리고 자신의 이야기가 더는 더럽혀지는 것을 막기 위해 직접 사건에 뛰어들기로 결심한다. 그의 손에는 만년필 대신, 차가운 루페가 들려 있었다.` },
                { name: '[탐정] 서도진', baseName: '서도진', rarity: 'R', faction: '탐정', stats: { hp: 100, atk: 15, def: 10 }, imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=서도진', cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=서도진', dialogues: ['사건 현장은 보존해주시죠.'], skills: [{ name: '추리', dialogue: '범인은 바로 당신!', power: 1.5, type: 'damage' }], deathDialogue: '이런... 실수를...', story: '사건을 파헤치기 위해, 그는 펜 대신 돋보기를 들었다. 그의 날카로운 시선은 거짓을 꿰뚫는다.' },
                { name: '[악몽] 서도진', baseName: '서도진', rarity: 'SR', faction: '탐정', stats: { hp: 200, atk: 30, def: 15 }, imageUrl: 'https://placehold.co/300x500/718096/ffffff?text=서도진', cardImageUrl: 'https://placehold.co/150x180/718096/ffffff?text=서도진', dialogues: ['자, 내 소설의 다음 페이지를 넘겨볼까?'], skills: [{ name: '현실 침식', dialogue: '이게 꿈이 아니라고 확신할 수 있나?', power: 1.8, type: 'damage' }], deathDialogue: '이 악몽은... 이제 시작일 뿐이야...', story: '그가 쓴 소설은 단순한 이야기가 아니다. 독자의 마음속 가장 깊은 공포를 파고드는 현실의 악몽 그 자체다. 그는 자신의 펜 끝에서 벌어지는 비극을 즐긴다.' },
                { name: '[작가의 우울] 서도진', baseName: '서도진', rarity: 'SSR', faction: '탐정', stats: { hp: 380, atk: 42, def: 28 }, imageUrl: 'https://placehold.co/300x500/4a5568/ffffff?text=서도진', cardImageUrl: 'https://placehold.co/150x180/4a5568/ffffff?text=서도진', dialogues: ['이야기의 끝은... 언제나 비극이지.'], skills: [{ name: '행간 읽기', dialogue: '모든 비극엔 이유가 있는 법.', power: 2.2, type: 'damage' }, { name: '에필로그', dialogue: '이제, 이 이야기의 막을 내리죠.', power: 1.5, type: 'debuff_def' }], deathDialogue: '결국... 나 또한 이야기의 일부였을 뿐인가...', story: '범인의 마음을 너무 깊이 이해해버린 천재 작가. 그는 사건의 진실을 꿰뚫어 볼수록, 인간 내면의 깊은 어둠과 마주하며 끝없는 우울에 잠긴다.', enhancementSuccessDialogue: '이것이... 이야기의 새로운 경지로군.'},
                { name: '[편집자] 윤필규', baseName: '윤필규', rarity: 'N', faction: '조수', stats: { hp: 60, atk: 8, def: 3 }, imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=윤필규', cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=윤필규', dialogues: ['오타입니다.'], skills: [{ name: '교정', dialogue: '이 문장은 틀렸습니다.', power: 1.3, type: 'damage' }], deathDialogue: '마감만은... 제발...', story: '그저 성실한 편집자일 뿐이었다. 담당 작가의 사건에 휘말리기 전까진.' },
                { name: '[조수] 윤필규', baseName: '윤필규', rarity: 'R', faction: '조수', stats: { hp: 110, atk: 14, def: 11 }, imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=윤필규', cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=윤필규', dialogues: ['제가 돕겠습니다.'], skills: [{ name: '자료 조사', dialogue: '찾았습니다!', power: 1.4, type: 'damage' }], deathDialogue: '죄송합니다...', story: '어리숙해 보이지만, 그의 꼼꼼함은 사건 해결의 중요한 실마리가 된다.' },
                { name: '[동거인] 윤필규', baseName: '윤필규', rarity: 'SR', faction: '조수', stats: { hp: 240, atk: 26, def: 19 }, imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=윤필규', cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=윤필규', dialogues: ['집세... 잊지 않으셨죠?'], skills: [{ name: '잔소리', dialogue: '방 좀 치우세요!', power: 1.9, type: 'damage' }], deathDialogue: '그래도... 즐거웠어...', story: '사건에 휘말린 작가와 함께 살며, 본의 아니게 사건의 중심에 서게 된다.' },
                { name: '[올곧은 정의] 윤필규', baseName: '윤필규', rarity: 'SSR', faction: '조수', stats: { hp: 370, atk: 43, def: 29 }, imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=윤필규', cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=윤필규', dialogues: ['진실을 외면할 순 없습니다.'], skills: [{ name: '내부고발', dialogue: '제가 모든 것을 밝히겠습니다.', power: 2.4, type: 'damage' }, { name: '굳은 의지', dialogue: '저는 꺾이지 않습니다!', power: 1.8, type: 'vampire' }], deathDialogue: '정의는... 살아있다...', story: '평범했던 그는, 수많은 불의를 목격하며 스스로가 정의의 목소리가 되기로 결심했다.' },
                { name: '[연구자] 윤서천', baseName: '윤서천', rarity: 'N', faction: '조수', stats: { hp: 45, atk: 9, def: 4 }, imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=윤서천', cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=윤서천', dialogues: ['흥미로운 샘플이군.'], skills: [{ name: '분석', dialogue: '결과가 나왔군.', power: 1.3, type: 'damage' }], deathDialogue: '데이터가... 부족해...', story: '그의 연구 노트에는 이해할 수 없는 화학식들만 가득했다.' },
                { name: '[범인] 윤서천', baseName: '윤서천', rarity: 'R', faction: '범인', stats: { hp: 100, atk: 17, def: 9 }, imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=윤서천', cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=윤서천', dialogues: ['계획通り...'], skills: [{ name: '독극물', dialogue: '치사량이야.', power: 1.6, type: 'damage' }], deathDialogue: '계획에 없었는데...', story: '천재적인 두뇌는 때로는 위험한 방향으로 흐르기도 한다.' },
                { name: '[실험쥐] 윤서천', baseName: '윤서천', rarity: 'SR', faction: '범인', stats: { hp: 260, atk: 24, def: 17 }, imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=윤서천', cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=윤서천', dialogues: ['이 주사... 정말 괜찮은 건가?'], skills: [{ name: '이상 반응', dialogue: '몸이... 뜨거워...!', power: 2.0, type: 'damage' }], deathDialogue: '결과는... 실패인가...', story: '스스로를 실험체로 삼는 것. 그것은 광기인가, 아니면 위대한 희생인가.' },
                { name: '[in vivo] 윤서천', baseName: '윤서천', rarity: 'SSR', faction: '탐정', stats: { hp: 340, atk: 48, def: 24 }, imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=윤서천', cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=윤서천', dialogues: ['인류를 위한 희생이다.'], skills: [{ name: '임상실험', dialogue: '넌 훌륭한 샘플이야.', power: 2.5, type: 'damage' }, { name: '부작용', dialogue: '예상 밖인데!', power: 1.4, type: 'debuff_def' }], deathDialogue: '최고의... 샘플이었는데...', story: '그는 자신의 연구가 세상을 구원할 것이라 굳게 믿고 있다. 그 과정에서 발생하는 사소한 희생은 어쩔 수 없다고 생각한다.' },
                { name: '[서점 주인] 한 현', baseName: '한 현', rarity: 'N', faction: '조수', stats: { hp: 70, atk: 6, def: 6 }, imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=한현', cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=한현', dialogues: ['어서오세요.'], skills: [{ name: '책 추천', dialogue: '이건 어떠신지?', power: 1.1, type: 'damage' }], deathDialogue: '가게는... 누가...', story: '동네의 작은 서점을 운영하는 평범한 청년. 그가 숨겨진 과거를 가지고 있다는 사실을 아는 이는 거의 없다.' },
                { name: '[조수] 한 현', baseName: '한 현', rarity: 'R', faction: '조수', stats: { hp: 140, atk: 14, def: 13 }, imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=한현', cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=한현', dialogues: ['제가 가보겠습니다.'], skills: [{ name: '현장 조사', dialogue: '뭔가 있군요.', power: 1.4, type: 'damage' }], deathDialogue: '제가... 너무 나섰나요...', story: '사건의 진상을 파헤치는 탐정을 보며, 그는 잊고 있던 과거의 자신을 떠올린다.' },
                { name: '[동행인] 한 현', baseName: '한 현', rarity: 'SR', faction: '조수', stats: { hp: 230, atk: 28, def: 20 }, imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=한현', cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=한현', dialogues: ['혼자 가게 둘 순 없죠.'], skills: [{ name: '엄호', dialogue: '뒤는 맡겨주세요!', power: 1.7, type: 'damage' }], deathDialogue: '먼저... 가세요...', story: '위험한 길이라는 것을 알면서도, 그는 동료를 위해 기꺼이 그 길에 함께 오른다.' },
                { name: '[한때는, 탐정] 한 현', baseName: '한 현', rarity: 'SSR', faction: '탐정', stats: { hp: 390, atk: 40, def: 30 }, imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=한현', cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=한현', dialogues: ['오랜만이군, 이 감각.'], skills: [{ name: '오래된 통찰', dialogue: '범인은... 이 안에 없어.', power: 2.2, type: 'damage' }, { name: '감싸기', dialogue: '더는 다치게 둘 수 없지!', power: 1.9, type: 'vampire' }], deathDialogue: '결국... 여기까지인가...', story: '과거의 명성을 뒤로 하고 평범한 삶을 택했던 그. 하지만 눈앞의 사건은 그를 다시 탐정의 길로 이끈다.' },
                // ==================== 도천영 ====================
                { name: '[연구자] 도천영', baseName: '도천영', rarity: 'N', faction: '탐정', stats: { hp: 65, atk: 7, def: 5 }, imageUrl: 'https://placehold.co/300x500/4fd1c5/ffffff?text=도천영', cardImageUrl: 'https://placehold.co/150x180/4fd1c5/ffffff?text=도천영', dialogues: ['가설을 세워보죠.'], skills: [{ name: '데이터 분석', dialogue: '변수를 통제해야 합니다.', power: 1.1, type: 'damage' }], deathDialogue: '데이터가... 부족했어...', story: '세상의 모든 현상을 데이터로 이해하려는 냉철한 연구자. 그의 연구실은 언제나 서늘한 공기가 감돈다.' },
                { name: '[탐정] 도천영', baseName: '도천영', rarity: 'R', faction: '탐정', stats: { hp: 130, atk: 15, def: 12 }, imageUrl: 'https://placehold.co/300x500/319795/ffffff?text=도천영', cardImageUrl: 'https://placehold.co/150x180/319795/ffffff?text=도천영', dialogues: ['현장은 거짓말을 하지 않습니다.'], skills: [{ name: '증거 수집', dialogue: '이건... 흥미롭군요.', power: 1.4, type: 'damage' }], deathDialogue: '이런 변수는... 계산에 없었는데...', story: '사건 현장을 하나의 거대한 실험실로 간주한다. 그에게 미제 사건이란 아직 증명되지 않은 가설일 뿐이다.' },
                { name: '[in vitro] 도천영', baseName: '도천영', rarity: 'SR', faction: '탐정', stats: { hp: 220, atk: 29, def: 19 }, imageUrl: 'https://placehold.co/300x500/086f83/ffffff?text=도천영', cardImageUrl: 'https://placehold.co/150x180/086f83/ffffff?text=도천영', dialogues: ['자, 실험을 시작하죠.'], skills: [{ name: '가설 검증', dialogue: '결과는 명확하군요.', power: 1.8, type: 'damage' }], deathDialogue: '오염... 됐어...', story: '통제된 환경, 완벽한 변수 통제 하에 진실을 규명한다. 그의 손끝에서 벌어지는 작은 실험은 사건 전체를 뒤흔든다.' },
                // ==================== 박연우 ====================
                { name: '[연구자] 박연우', baseName: '박연우', rarity: 'N', faction: '탐정', stats: { hp: 75, atk: 5, def: 6 }, imageUrl: 'https://placehold.co/300x500/f6ad55/ffffff?text=박연우', cardImageUrl: 'https://placehold.co/150x180/f6ad55/ffffff?text=박연우', dialogues: ['기초부터 차근차근.'], skills: [{ name: '문헌 조사', dialogue: '선행 연구를 참고하죠.', power: 1.1, type: 'damage' }], deathDialogue: '아직...이었는데...', story: '언제나 미소를 잃지 않는 긍정적인 성격의 유기화학 연구자. 복잡한 화학 구조식 속에서 아름다움을 찾는다.' },
                { name: '[탐정] 박연우', baseName: '박연우', rarity: 'R', faction: '탐정', stats: { hp: 150, atk: 12, def: 14 }, imageUrl: 'https://placehold.co/300x500/dd6b20/ffffff?text=박연우', cardImageUrl: 'https://placehold.co/150x180/dd6b20/ffffff?text=박연우', dialogues: ['조각들을 맞춰볼까요?'], skills: [{ name: '알리바이 분석', dialogue: '이 시간엔... 이게 불가능해요.', power: 1.4, type: 'damage' }], deathDialogue: '마지막 퍼즐이...', story: '흩어진 단서들을 모아 하나의 진실로 완성시키는 과정을 즐긴다. 그에게 사건 해결은 곧 완벽한 분자를 합성하는 것과 같다.' },
                { name: '[total synthesis] 박연우', baseName: '박연우', rarity: 'SR', faction: '탐정', stats: { hp: 240, atk: 25, def: 22 }, imageUrl: 'https://placehold.co/300x500/c05621/ffffff?text=박연우', cardImageUrl: 'https://placehold.co/150x180/c05621/ffffff?text=박연우', dialogues: ['자, 모든 것이 모였습니다.'], skills: [{ name: '전합성', dialogue: '이것이 바로 진실의 구조입니다!', power: 1.8, type: 'damage' }], deathDialogue: '반응이... 멈췄어...', story: '아무것도 없는 곳에서 시작하여 단 하나의 완벽한 진실을 구축해낸다. 그의 통찰력은 사건의 전모를 꿰뚫는다.' },
                // ==================== 강은율 ====================
                { name: '[연구자] 강은율', baseName: '강은율', rarity: 'N', faction: '조수', stats: { hp: 60, atk: 8, def: 5 }, imageUrl: 'https://placehold.co/300x500/76e4f7/000000?text=강은율', cardImageUrl: 'https://placehold.co/150x180/76e4f7/000000?text=강은율', dialogues: ['시뮬레이션을 돌려보겠습니다.'], skills: [{ name: '모델링', dialogue: '예상 결과는 이렇습니다.', power: 1.1, type: 'damage' }], deathDialogue: '계산 오류인가...', story: '컴퓨터와 숫자를 더 신뢰하는 계산화학 연구자. 복잡한 현실보다는 깔끔한 가상 세계에서의 계산을 선호한다.' },
                { name: '[조수] 강은율', baseName: '강은율', rarity: 'R', faction: '조수', stats: { hp: 125, atk: 16, def: 11 }, imageUrl: 'https://placehold.co/300x500/0bc5ea/ffffff?text=강은율', cardImageUrl: 'https://placehold.co/150x180/0bc5ea/ffffff?text=강은율', dialogues: ['필요한 정보는 전부 모았습니다.'], skills: [{ name: '정보 처리', dialogue: '여기서 유의미한 패턴이...', power: 1.4, type: 'damage' }], deathDialogue: '제 정보가... 틀렸을 리 없는데...', story: '탐정의 요청에 따라 방대한 양의 데이터를 수집하고 분석하며 그의 활동을 돕는다. 여전히 사람보단 숫자를 믿는다.' },
                { name: '[in silico] 강은율', baseName: '강은율', rarity: 'SR', faction: '조수', stats: { hp: 210, atk: 30, def: 18 }, imageUrl: 'https://placehold.co/300x500/0987a0/ffffff?text=강은율', cardImageUrl: 'https://placehold.co/150x180/0987a0/ffffff?text=강은율', dialogues: ['모든 경우의 수를 예측했습니다.'], skills: [{ name: '예측 분석', dialogue: '범인은, 그리로 갈 겁니다.', power: 1.8, type: 'damage' }], deathDialogue: '최적해가... 아니었단 말인가...', story: '사건의 모든 정보를 데이터로 변환하여 가장 가능성이 높은 진실을 도출해낸다. 그의 예측은 거의 빗나가는 법이 없다.' },
                // ==================== 백정문 ====================
                { name: '[연구자] 백정문', baseName: '백정문', rarity: 'N', faction: '탐정', stats: { hp: 70, atk: 6, def: 6 }, imageUrl: 'https://placehold.co/300x500/fbb6ce/000000?text=백정문', cardImageUrl: 'https://placehold.co/150x180/fbb6ce/000000?text=백정문', dialogues: ['에너지를 측정해보죠.'], skills: [{ name: '분광학', dialogue: '빛이 모든 걸 말해줄 겁니다.', power: 1.1, type: 'damage' }], deathDialogue: '에너지가... 부족해...', story: '들뜬 상태의 분자를 연구하는 물리화학자. 평소엔 차분하지만, 흥미로운 현상을 발견하면 누구보다 뜨거워진다.' },
                { name: '[탐정] 백정문', baseName: '백정문', rarity: 'R', faction: '탐정', stats: { hp: 140, atk: 14, def: 13 }, imageUrl: 'https://placehold.co/300x500/f687b3/ffffff?text=백정문', cardImageUrl: 'https://placehold.co/150x180/f687b3/ffffff?text=백정문', dialogues: ['보이지 않는 에너지가 느껴지는군요.'], skills: [{ name: '열 추적', dialogue: '아직... 온기가 남아있어.', power: 1.4, type: 'damage' }], deathDialogue: '결정적인 순간에...', story: '사건 현장에 남은 미세한 에너지의 흔적을 쫓아 진실에 다가간다. 그의 눈에는 보이지 않는 것들이 보인다.' },
                { name: '[삼중항] 백정문', baseName: '백정문', rarity: 'SR', faction: '탐정', stats: { hp: 230, atk: 28, def: 20 }, imageUrl: 'https://placehold.co/300x500/d53f8c/ffffff?text=백정문', cardImageUrl: 'https://placehold.co/150x180/d53f8c/ffffff?text=백정문', dialogues: ['자, 들떠볼 시간입니다!'], skills: [{ name: '인광(燐光)', dialogue: '숨어있는 진실을 비춰라!', power: 1.8, type: 'damage' }], deathDialogue: '다시... 바닥상태로...', story: '사건이 교착 상태에 빠졌을 때, 그는 평범한 상태에서는 보이지 않는 진실을 꿰뚫어 보는 힘을 발휘한다.' },
                // ==================== 독고유진 ====================
                { name: '[소설가] 독고유진', baseName: '독고유진', rarity: 'N', faction: '조수', stats: { hp: 80, atk: 6, def: 5 }, imageUrl: 'https://placehold.co/300x500/9f7aea/ffffff?text=독고유진', cardImageUrl: 'https://placehold.co/150x180/9f7aea/ffffff?text=독고유진', dialogues: ['재미있는 이야기네요.'], skills: [{ name: '인물 설정', dialogue: '그 사람은... 그런 말을 할 리가 없어요.', power: 1.1, type: 'damage' }], deathDialogue: '결말이... 이래선 안되는데...', story: '사람들의 이야기를 듣고 쓰는 것을 좋아하는 미스터리 소설가. 그의 상상력은 때로 현실보다 더 현실 같다.' },
                { name: '[조수] 독고유진', baseName: '독고유진', rarity: 'R', faction: '조수', stats: { hp: 160, atk: 13, def: 13 }, imageUrl: 'https://placehold.co/300x500/805ad5/ffffff?text=독고유진', cardImageUrl: 'https://placehold.co/150x180/805ad5/ffffff?text=독고유진', dialogues: ['다음 이야기가 궁금해졌거든요.'], skills: [{ name: '복선 파악', dialogue: '이건 그때 그 사건과 이어져있어!', power: 1.4, type: 'damage' }], deathDialogue: '제가... 너무 깊이 들어왔나요...', story: '자신이 쓰던 소설보다 더 소설 같은 현실의 사건에 휘말린다. 그는 이야기의 끝을 보기 위해 탐정과 동행하기로 한다.' },
                { name: '[무사] 독고유진', baseName: '독고유진', rarity: 'SR', faction: '조수', stats: { hp: 250, atk: 30, def: 18 }, imageUrl: 'https://placehold.co/300x500/553c9a/ffffff?text=독고유진', cardImageUrl: 'https://placehold.co/150x180/553c9a/ffffff?text=독고유진', dialogues: ['이야기를 지키기 위해서라면.'], skills: [{ name: '일필휘지(一筆揮之)', dialogue: '이 검으로, 결말을 쓰겠다!', power: 1.8, type: 'damage' }], deathDialogue: '여기까지가... 제 이야기인가 봅니다...', story: '그가 쓰는 것은 더 이상 펜이 아니다. 소중한 사람들과 자신이 만든 이야기를 지키기 위해, 그는 잊고 있던 검을 다시 잡았다.' },
                // ==================== 양석민 ====================
                { name: '[연구자] 양석민', baseName: '양석민', rarity: 'N', faction: '탐정', stats: { hp: 70, atk: 7, def: 5 }, imageUrl: 'https://placehold.co/300x500/38a169/ffffff?text=양석민', cardImageUrl: 'https://placehold.co/150x180/38a169/ffffff?text=양석민', dialogues: ['흐름을 읽어야 합니다.'], skills: [{ name: '촉매 작용', dialogue: '반응을 이끌어내죠.', power: 1.1, type: 'damage' }], deathDialogue: '길을... 잃었군...', story: '반응의 경로를 설계하고 예측하는 것을 전문으로 하는 연구원. 언제나 가장 효율적인 길을 찾으려 노력한다.' },
                { name: '[탐정] 양석민', baseName: '양석민', rarity: 'R', faction: '탐정', stats: { hp: 145, atk: 15, def: 11 }, imageUrl: 'https://placehold.co/300x500/2f855a/ffffff?text=양석민', cardImageUrl: 'https://placehold.co/150x180/2f855a/ffffff?text=양석민', dialogues: ['사건의 흐름이 보입니다.'], skills: [{ name: '경로 예측', dialogue: '범인은 분명 그곳으로 향했을 겁니다.', power: 1.4, type: 'damage' }], deathDialogue: '예상치 못한... 경로였습니다...', story: '용의자의 행동 패턴과 사건의 전개 과정을 분석하여 다음 단계를 예측한다. 그의 예측은 대부분 현실이 된다.' },
                { name: '[인도자] 양석민', baseName: '양석민', rarity: 'SR', faction: '탐정', stats: { hp: 235, atk: 27, def: 21 }, imageUrl: 'https://placehold.co/300x500/22543d/ffffff?text=양석민', cardImageUrl: 'https://placehold.co/150x180/22543d/ffffff?text=양석민', dialogues: ['제가, 길을 보여드리죠.'], skills: [{ name: '최단 경로', dialogue: '진실로 가는 가장 빠른 길입니다.', power: 1.8, type: 'damage' }], deathDialogue: '여기까지... 안내하는 것이 제 역할...', story: '복잡하게 얽힌 사건 속에서 헤매는 동료들을 위해 가장 확실하고 빠른 길을 제시하는 길잡이. 그와 함께라면 길을 잃지 않는다.' },
                // ==================== 윤유준 ====================
                { name: '[학생] 윤유준', baseName: '윤유준', rarity: 'N', faction: '조수', stats: { hp: 65, atk: 5, def: 8 }, imageUrl: 'https://placehold.co/300x500/e53e3e/ffffff?text=윤유준', cardImageUrl: 'https://placehold.co/150x180/e53e3e/ffffff?text=윤유준', dialogues: ['어? 저건...'], skills: [{ name: '목격', dialogue: '제가 본 게 맞다면...', power: 1.1, type: 'damage' }], deathDialogue: '못 본 척... 했어야 했는데...', story: '호기심 많고 관찰력이 뛰어난 학생. 우연히 사건의 결정적인 순간을 목격하게 된다.' },
                { name: '[조수] 윤유준', baseName: '윤유준', rarity: 'R', faction: '조수', stats: { hp: 135, atk: 12, def: 15 }, imageUrl: 'https://placehold.co/300x500/c53030/ffffff?text=윤유준', cardImageUrl: 'https://placehold.co/150x180/c53030/ffffff?text=윤유준', dialogues: ['제가 봤어요. 확실해요.'], skills: [{ name: '증언', dialogue: '그날, 그 사람은 거기에 있었어요.', power: 1.4, type: 'damage' }], deathDialogue: '제가... 도움이 되었을까요?', story: '자신의 목격이 사건 해결에 중요한 단서가 된다는 것을 알고, 용기를 내어 탐정을 돕기 시작한다.' },
                { name: '[방관자] 윤유준', baseName: '윤유준', rarity: 'SR', faction: '조수', stats: { hp: 225, atk: 26, def: 23 }, imageUrl: 'https://placehold.co/300x500/742a2a/ffffff?text=윤유준', cardImageUrl: 'https://placehold.co/150x180/742a2a/ffffff?text=윤유준', dialogues: ['...저는 그저, 보고 있을 뿐입니다.'], skills: [{ name: '객관적 시선', dialogue: '감정은... 배제하는 편이 좋습니다.', power: 1.8, type: 'damage' }], deathDialogue: '결국... 아무것도 하지 못했군.', story: '사건의 추악한 진실과 마주한 후, 그는 한 걸음 물러나 모든 것을 지켜보기로 결심한다. 더 이상 섣불리 개입하지 않으리라 다짐하면서.' }
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

            const eventStories = [
    {
        title: '사건의 발단: 푸른 잉크의 경고',
        content: [
            // ✅ position 속성 추가
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '익명의 제보가 또 들어왔군. 이번엔 푸른 잉크로 쓰여 있어.' },
            { character: '윤필규', expression: 'neutral', position: 'right', dialogue: '푸른 잉크요? 저번에 쓰러진 작가분의 원고와는 전혀 다른 색이네요.' },
            { character: null, dialogue: '편지에는 암호 같은 화학식이 적혀 있었다. 이는 단순한 경고가 아니라, 앞으로 벌어질 사건의 매뉴얼 같았다.' }
        ]
    },
    {
        title: '사라진 그림자: 감춰진 연구실',
        content: [
            // ✅ position 속성 추가
            { character: '도천영', expression: 'serious', position: 'right', dialogue: '이 화학식은 존재하지 않습니다. 하지만 구조를 역산해보니, 폐쇄된 화학 연구소의 위치를 가리키고 있군요.' },
            { character: '강은율', expression: 'neutral', position: 'left', dialogue: '시뮬레이션 결과, 그 연구소는 최근 48시간 이내에 누군가 침입한 기록이 있습니다.' },
            { character: null, dialogue: '현장은 이미 누군가의 손을 거친 후였다. 범인의 그림자는 잡히지 않았지만, 뒤섞인 시약병만이 그들의 흔적을 증명했다.' }
        ]
    },
    {
        title: '첫 번째 증인: 떨리는 목소리',
        content: [
            // ✅ position 속성 추가
            { character: '박연우', expression: 'neutral', position: 'left', dialogue: '연구소 근처를 수색했습니다. 폐지 수거인이 사건 당일 새벽, 흰 가운을 입은 사람을 봤다고 증언했어요.' },
            { character: '백정문', expression: 'serious', position: 'right', dialogue: '그의 진술에서 미세한 "두려움의 파장"이 느껴집니다. 그가 본 것은 단순한 연구원이 아닐 겁니다.' },
            { character: null, dialogue: '목격자는 겁에 질려 있었고, 그가 본 흰 가운의 모습은 평범한 연구원보다는 실험에 미친 광인에 가까웠다.' }
        ]
    },
    {
        title: '거짓된 알리바이: 완벽한 밀실',
        content: [
            // ✅ position 속성 추가
            { character: '서도진', expression: 'serious', position: 'left', dialogue: '용의자 B는 사건 당일, 자신이 완벽한 밀실 같은 환경에 있었다고 주장해. 물 샐 틈 없는 알리바이야.' },
            { character: '양석민', expression: 'neutral', position: 'right', dialogue: '모든 반응 경로를 시뮬레이션했지만, 그가 밀실을 벗어날 방법은 없습니다. 하지만... 경로는 하나뿐이 아니죠.' },
            { character: null, dialogue: '탐정은 완벽한 진술 속에서, 단 하나의 거짓된 문장을 찾아내려 애쓴다.' }
        ]
    },
    {
        title: '어둠 속의 계약: 공범의 조건',
        content: [
            // ✅ position 속성 추가
            { character: '독고유진', expression: 'serious', position: 'right', dialogue: '범인은 혼자가 아닐 겁니다. 누군가에게 협조를 얻고, 그 대가로 물질적 보상이 아닌 "정보"를 약속했을 가능성이 높아요.' },
            { character: '윤필규', expression: 'neutral', position: 'left', dialogue: '어둠 속에서 계약된 것은 무엇일까요? 진실의 은폐? 아니면... 새로운 이야기의 집필?' },
            { character: null, dialogue: '계약서의 흔적은 없었지만, 그들이 주고받은 교환의 에너지("열 추적")는 현장에 강하게 남아 있었다.' }
        ]
    },
    {
        title: '두 번째 피해자: 붉게 물든 펜',
        content: [
            { character: null, dialogue: '두 번째 피해자는 평범한 기자였다. 그는 사건에 대해 깊이 파고들고 있었고, 그 대가로 붉게 물든 펜을 남겼다.' },
            // ✅ position 속성 추가
            { character: '도천영', expression: 'serious', position: 'right', dialogue: '사망 원인은 D-성분 노출입니다. 하지만 이번엔 농도가 매우 낮아요. 경고 살인입니다.' },
            { character: '서도진', expression: 'angry', position: 'left', dialogue: '경고라니! 범인은 우리에게 자신의 이야기를 강요하고 있어!' }
        ]
    },
    {
        title: '숨겨진 단서: 미발표 논문',
        content: [
            // ✅ position 속성 추가
            { character: '박연우', expression: 'neutral', position: 'left', dialogue: '피해자 기자에게서 미발표된 화학 논문 초안이 발견되었습니다. 논문의 주제는 D-성분의 파생 물질입니다.' },
            { character: '윤서천', expression: 'serious', position: 'right', dialogue: '파생 물질? 그건 제가 폐기한 연구입니다! 이 물질을 만들 수 있는 건... 저를 제외하고 단 한 사람뿐입니다.' },
            { character: null, dialogue: '단서는 과거의 실패한 연구를 향하고 있었다.' }
        ]
    },
    {
        title: '함정: 조작된 데이터',
        content: [
            // ✅ position 속성 추가
            { character: '강은율', expression: 'serious', position: 'left', dialogue: '범인의 것으로 추정되는 데이터를 해킹했습니다. 하지만 분석 결과, 데이터에 "디지털 흔적 조작"의 징후가 있습니다.' },
            { character: '백정문', expression: 'neutral', position: 'right', dialogue: '함정입니다. 범인은 우리가 잘못된 에너지 경로를 따르도록 유도하고 있어요. 빛을 따라가지 마십시오.' },
            { character: null, dialogue: '모든 것이 조작된 상황. 진실은 데이터의 이면(裏面)에 숨어 있었다.' }
        ]
    },
    {
        title: '배신자의 얼굴: 가까운 그림자',
        content: [
            // ✅ position 속성 추가
            { character: '서도진', expression: 'serious', position: 'left', dialogue: '모든 용의자를 배제했을 때 남는 단 하나의 이름... 그가 이 모든 사건의 발단이었어.' },
            { character: '독고유진', expression: 'neutral', position: 'right', dialogue: '가장 믿었던 이가 뒤에서 칼을 꽂는다는 결말은... 최악의 이야기입니다.' },
            { character: '양석민', expression: 'serious', position: 'left', dialogue: '배신자가 정한 경로는 이미 명확합니다. 마지막 결전의 장소로 향해야 합니다.' }
        ]
    },
    {
        title: '진실의 이면: 마지막 문장',
        content: [
            { character: null, dialogue: '모든 것이 끝났다. 진실은 잔혹했고, 그 이면에는 왜곡된 정의와 복수가 숨겨져 있었다.' },
            // ✅ position 속성 추가
            { character: '서도진', expression: 'neutral', position: 'left', dialogue: '결국... 내가 썼던 소설보다 더 비극적인 결말을 맞이했군.' },
            { character: '도천영', expression: 'serious', position: 'right', dialogue: '이제 남은 것은 사건을 종결하고... 남겨진 흔적을 정리하는 것뿐입니다.' }
        ]
    }
];

// ✅ 1단계: 아래 코드를 game_data.js 파일에 추가하세요.

const eventStoryPart2 = {
    // --- 전반부 스토리 ---
    firstHalf: [
        {
            character: '서도진', expression: 'serious', position: 'left',
            dialogue: '사건 현장에서 두 개의 결정적인 증거가 나왔어. 하나는 피해자의 다잉 메시지, 다른 하나는... 용의자의 지문이 묻은 찻잔이야.'
        },
        {
            character: '도천영', expression: 'neutral', position: 'right',
            dialogue: '데이터는 거짓말을 하지 않죠. 하지만 다잉 메시지는 해석의 여지가 있고, 지문은 조작될 수 있습니다.'
        },
        {
            character: null,
            dialogue: '두 개의 상반된 단서. 어떤 것을 더 신뢰해야 할까?'
        },
        {
            character: '서도진', expression: 'neutral', position: 'left',
            dialogue: '이제 선택해야 해. 어떤 증거를 중심으로 수사를 진행할지...',
            // ✨ 선택지 추가: choices 배열을 추가합니다.
            choices: [
                // text: 유저에게 보여줄 선택지 텍스트
                // nextScene: 이 선택지를 골랐을 때 이동할 장면의 인덱스(순서)
                { text: '다잉 메시지를 믿는다.', nextScene: 4 },
                { text: '결정적인 지문을 믿는다.', nextScene: 5 }
            ]
        },
        // 분기 1: 다잉 메시지를 선택한 경우 (인덱스 4)
        {
            character: null,
            dialogue: '당신은 피해자가 마지막 힘을 다해 남긴 메시지에 더 무게를 두기로 했다.'
        },
        // 분기 2: 지문을 선택한 경우 (인덱스 5)
        {
            character: null,
            dialogue: '당신은 과학적이고 물리적인 증거인 지문을 더 신뢰하기로 했다.'
        },
        // ✨ 전반부 마지막 장면 (공통)
        {
            character: '서도진', expression: 'serious', position: 'left',
            dialogue: '좋아, 그 방향으로 수사를 진행하지. 우리의 선택이 어떤 결과로 이어질지는... 아직 아무도 몰라.',
            // ✨ 마지막 선택지: 통계 집계를 위한 특별한 선택지를 추가합니다.
            choices: [
                {
                    text: '전반부 스토리 완료',
                    statId: 'event_part2_final_choice', // 통계를 식별할 고유 ID
                    isFinalChoice: true // 집계 시스템을 호출할 스위치
                }
            ]
        }
    ],

    // --- 후반부 스토리 (나중에 추가할 공간) ---
    secondHalf: [
        // ... 후반부 스토리는 나중에 이 곳에 추가합니다 ...
    ]
};

            const eventShopItems = [
                { id: 'event_ssr_card', name: '[이벤트] 어둠의 계약자', type: 'card', cost: 10000, limit: 1, itemData: characters.find(c => c.name === '[이벤트] 어둠의 계약자') },
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
                }
            };
			
			const rarityProbabilities = { 'SSR': 3, 'SR': 12, 'R': 35, 'N': 50 };
            const eventRarityProbabilities = { 'SSR': 6, 'SR': 14, 'R': 30, 'N': 50 };
            const EVENT_CHARACTER_NAME = '[악몽] 서도진';
            const EVENT_START_DATE = new Date('2025-10-14T00:00:00');
            const EVENT_END_DATE = new Date('2025-10-24T23:59:59');
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





















