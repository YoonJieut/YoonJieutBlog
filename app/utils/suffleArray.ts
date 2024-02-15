/**
 * 배열의 요소를 임의로 섞습니다.
 *
 * @param array - 섞을 배열입니다.
 * @returns {array}섞인 배열입니다.
 *
 * @작동원리 ;
 * Fisher-Yates 알고리즘을 사용하여 배열을 섞는 일반적인 방법입니다.
 * 이 알고리즘은 배열의 각 요소를 한 번씩 순회하면서
 * 현재 요소와 그 이후의 요소 중 무작위로 선택한 요소와 위치를 바꿉니다.
 * 이를 반복하면 배열이 무작위로 섞이게 됩니다.
 *
 */
export function shuffleArray(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
