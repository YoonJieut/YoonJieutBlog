import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";
export default function IntroduceTestPage() {
  return (
    <main className="h-full w-full OutLine flexCenter gap-10">
      <div className="introduceOutBox flexCenter w-3/4 gap-40">
        <ImgCard
          imgUrl="/images/textCursor.png"
          imgTitle="신입 개발자 '윤준현'입니다."
          imgSub=""
          imgWidth={400}
          imgHeight={400}
        />
        <div className="introduceMySelf OutLine p-4 flex flex-col space-y-4 w-1/2">
          {/* 수정 필요 */}
          <h3 className="Imbue text-2xl font-bold">
            한 가지에 빠지면 선택과 집중을 통해 몰두해 보겠다는 마음.
          </h3>
          <hr />
          <p>
            <strong>
              제 성격의 가장 큰 장점은 깊이 있는 집중력과 책임감입니다.
            </strong>
          </p>
          <p>
            프로젝트 할 때, 저는 세부 사항에 주의를 기울이며, 프로젝트의 성공을
            위해 끝까지 책임을 지고 노력하는 것이 저의 장점이고 원동력이라고
            생각합니다. 그 일에 대해 완전히 이해하고자 하는 집념은 가끔 주변
            사람을 신경 쓰지 못하는 모습을 보입니다 하지만 최근에는 이에 대해
            자신을 질책하지 않고 더 효율적인 방법에 대한 갈망과 성장통으로
            이해하였습니다.
          </p>
          <p>
            이 모습도 자신의 한 모습임을 이해하고 급하거나 바쁜 와중에서도
            주변을 환기하거나 의도적으로 둘러봄으로써 자신의 장점을 극대화할 수
            있는 성숙한 사람이 되고 또 항상 겸손해지고자 합니다. 이 과정을 통해
            직장 동료분 나아가서 선후배분들과 원활한 협력과 목표를 향해
            나아가는데 유리할 작용을 할 수 있다는 것이 제가 추구하는 미래의
            모습입니다.
          </p>
        </div>
      </div>
    </main>
  );
}
