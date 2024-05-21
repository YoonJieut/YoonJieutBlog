// SvgAnimationController.ts
// InteractiveClipPath.tsx에 사용되는 함수가 캡슐화 되어 있습니다.

// memo : 객체 지향형에 많이 어색한 것 같다 공부가 더 필요할 것 같다.

import { MousePosition } from "@/app/_interfaces/animationInterfaces/animationInterfaces";

class SvgAnimationController {
  svgElement: SVGSVGElement;

  constructor(svgElement: SVGSVGElement) {
    this.svgElement = svgElement;
  }
  // svgElement를 받아서 svgElement를 초기화 시키는 함수
  getSVGPoint(event: React.MouseEvent): MousePosition {
    const pt = this.svgElement.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const screenCTM = this.svgElement.getScreenCTM();
    if (screenCTM) {
      return pt.matrixTransform(screenCTM.inverse()) as MousePosition;
    }
    return { x: 0, y: 0 };
  }
  // Rect 태그를 이동시키는 함수
  moveRect(
    event: React.MouseEvent,
    updatePosition: (pos: MousePosition) => void
  ): void {
    const svgPoint = this.getSVGPoint(event);
    const moveDistance = 5;
    const offsetX = svgPoint.x < 100 ? moveDistance : -moveDistance;
    const offsetY = svgPoint.y < 100 ? moveDistance : -moveDistance;
    updatePosition({ x: 5 + offsetX, y: offsetY });
  }
  // Rect 태그를 초기화 시키는 함수
  resetRect(updatePosition: (pos: MousePosition) => void): void {
    updatePosition({ x: 5, y: 0 });
  }
}

export default SvgAnimationController;
