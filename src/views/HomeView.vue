<script setup>
  import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  import { Navigation, Pagination, Autoplay } from 'swiper/modules'


  const swiper = ref(null)
  const onSwiper = (instance) => {
    swiper.value = instance
  }

  const mmgList = Object.values(
    import.meta.glob('@/assets/images/mmg-*.png', {
      eager: true,
      import: 'default'
    })
  )
  const mmgListDouble = [...mmgList, ...mmgList]

  import kv01 from '@/assets/images/thehandsome.jpg'
  import kv02 from '@/assets/images/gsretail.jpg'
  import kv03 from '@/assets/images/kbs.jpg'

  const projectList = [
    {
      img: kv01,
      title : '한섬',
      subTitle: '더한섬닷컴, H패션몰 운영',
      text: '이벤트 및 기획전 운영과 메인 개편 작업'
    },
    {
      img: kv02,
      title : 'GS리테일',
      subTitle: '내부 시스템 프로젝트',
      text: 'Vuetify를 활용한 컴포넌트 설계 및 개발'
    },
    {
      img: kv03,
      title : 'KBS',
      subTitle: '메인 개편',
      text: '메인 개편에 따른 UI 퍼블리싱 및 인터랙션 구현'
    },
  ]

  let observer;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const active = entry.isIntersecting

          entry.target.classList.toggle('active', active)

          if (entry.target.id === 'project') {
            if (active) {
              swiper.value?.autoplay.start()
            } else {
              swiper.value?.autoplay.stop()
            }
          }
        })
      },
      {
        threshold: 0.5
      }
    )

    document.querySelectorAll(".animation").forEach((el) => {
      observer.observe(el);
    });
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
</script>

<template>
  <main>
    <div id="home" class="profile animation">
      <div class="profile-box">
        <img src="@/assets/images/profile.png" alt="">
        <div class="text-area">
          <p>
            안녕하세요.<br />
            웹 퍼블리셔 <span>박형석</span> 입니다.
          </p>
        </div>
      </div>
    </div>
    <Swiper
      class="mmg-swiper"
      :slides-per-view="'auto'"
      :loop="true"
      :speed="3000"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false
      }"
      :modules="[Autoplay]"
    >
      <SwiperSlide v-for="(item, index) in mmgListDouble" :key="index">
        <img :src="item" alt="" />
      </SwiperSlide>
    </Swiper>
    <div id="about" class="about animation">
      <div class="inner">
        <div class="section-title">
          <strong>ABOUT</strong>
        </div>
        <ul class="about-list">
          <li class="career">
            <p class="title">· 경력</p>
            <ul class="sub-list career-list">
              <li>
                <p class="date">2022. 5 ~ 재직 중</p>
                <p class="company">에스투퍼블리싱 | <span>웹 퍼블리셔</span></p>
              </li>
              <li>
                <p class="date">2020. 8 ~ 2021. 10</p>
                <p class="company">FSSNL | 롯데자이언츠 <span>상품 디자이너</span></p>
              </li>
            </ul>
          </li>
          <li class="skills">
            <p class="title">· SKILLS</p>
            <div class="skills-wrap">
              <ul class="sub-list skills-list">
                <li>
                  <img src="@/assets/images/skills-01.png" alt="" />
                </li>
                <li>
                  <img src="@/assets/images/skills-02.png" alt="" />
                </li>
                <li>
                  <img src="@/assets/images/skills-03.png" alt="" />
                </li>
                <li>
                  <img src="@/assets/images/skills-04.png" alt="" />
                </li>
                <li>
                  <img src="@/assets/images/skills-06.png" alt="" />
                </li>
                <li>
                  <img src="@/assets/images/skills-07.png" alt="" />
                </li>
              </ul>
              <p>
                * Vue를 활용한 반응형 웹사이트 및 인터랙션 UI 구현이 가능하며,<br />
                Photoshop과 Illustrator를 활용한 그래픽 작업이 가능합니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="project" class="project animation">
      <div class="inner">
        <div class="section-title">
          <strong>PROJECT</strong>
        </div>
        <div class="project-swiper">
          <Swiper
            :modules="[Pagination, Autoplay]"
            :slides-per-view="1"
            :loop="true"
            :speed="1500"
            :autoplay="{
              delay: 3000
            }"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
          >
            <SwiperSlide v-for="(item, index) in projectList" :key="index">
              <div class="img-wrap">
                <img :src="item.img" alt="" />
              </div>
              <div class="text-area">
                <div class="kv-title">
                  <p>{{ item.title }}</p>
                </div>
                <p class="kv-sub-title">{{ item.subTitle}}</p>
                <p class="kv-text">
                  {{ item.text }}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <p class="text">
            <span>한섬, GS리테일, KBS</span> 등<br />
            다양한 웹사이트의<br />
            개편 및 유지보수<br />
            프로젝트를 수행했습니다.
          </p>
        </div>
      </div>
    </div>
    <div id="contact" class="contact animation">
      <div class="inner">
        <div class="section-title">
          <strong>CONTACT</strong>
        </div>
        <div class="contact-wrap">
          <div class="text-area">
            <strong>
              끊임없이 배우고 도전하며<br />
              더 나은 결과를 만들어가는<br />
              퍼블리셔 <span>박형석</span>입니다.
            </strong>
          </div>
          <div class="img-area">
            <img src="@/assets/images/mmg-07.png" alt="">
          </div>
          <div class="contact-area">
            <ul>
              <li>
                <p>
                  <span>이메일:</span><br />
                  pkhyngsk@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <span>H.P:</span><br />
                  010-6792-9909
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="product-area">
      <div class="new">
        <strong class="title">NEW</strong>
        <div class="product">
          <ul>
            <li>
              <div class="img">
                <a href="">
                  <img src="@/assets/images/prd-01.jpg" alt="">
                </a>
              </div>
              <div class="info">
                <p class="brand">SALOMON</p>
                <p class="name">product - 01</p>
                <p class="price">99,000원</p>
              </div>                
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">XS S M L XL</p>
              </div>                
            </li>
            <li>
              <div class="img">
                <a href="">
                  <img src="@/assets/images/prd-02.jpg" alt="">
                </a>
              </div>
              <div class="info">
                <p class="brand">SALOMON</p>
                <p class="name">product - 02</p>
                <p class="price">99,000원</p>
              </div>     
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">XS S M L XL</p>
              </div>                              
            </li>
            <li>
              <div class="img">
                <a href="">
                  <img src="@/assets/images/prd-03.jpg" alt="">
                </a>
              </div>
              <div class="info">
                <p class="brand">SALOMON</p>
                <p class="name">product - 03</p>
                <p class="price">99,000원</p>
              </div>            
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">XS S M L XL</p>
              </div>                       
            </li>
            <li>
              <div class="img">
                <a href="">
                  <img src="@/assets/images/prd-04.jpg" alt="">
                </a>
              </div>
              <div class="info">
                <p class="brand">SALOMON</p>
                <p class="name">product - 04</p>
                <p class="price">99,000원</p>
              </div>            
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">XS S M L XL</p>
              </div>                       
            </li>
            <li>
              <div class="img">
                <a href="">
                  <img src="@/assets/images/prd-05.jpg" alt="">
                </a>
              </div>
              <div class="info">
                <p class="brand">SALOMON</p>
                <p class="name">product - 06</p>
                <p class="price">99,000원</p>
              </div>            
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">XS S M L XL</p>
              </div>                       
            </li>
          </ul>
        </div>
      </div>        
    </div>
    <div class="event-area">
      <ul>
        <li>
          <a href="">
            <img src="@/assets/images/event-01.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/event-02.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/event-03.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/event-04.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/event-05.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/event-06.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/event-07.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/event-08.jpg" alt="">
          </a>
        </li>
      </ul>
      <button type="button"></button>
    </div>      
    <div class="product-area">
      <div class="best">
        <strong class="title">BEST</strong>
        <div class="product">
          <div class="swiper productSwiper01">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="img">
                  <a href="">
                    <img src="@/assets/images/best-01.jpg" alt="">
                  </a>
                </div>
                <div class="info">
                  <p class="brand">SALOMON</p>
                  <p class="name">살로몬 공용 ADV 스킨 12세트 Black</p>
                  <p class="price">230,000원</p>
                </div>
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">free</p>
              </div>                    
              </div>
              <div class="swiper-slide">
                <div class="img">
                  <a href="">
                    <img src="@/assets/images/best-02.jpg" alt="">
                  </a>
                </div>
                <div class="info">
                  <p class="brand">SALOMON</p>
                  <p class="name">살로몬 공용 S/LAB 펄사 3 Fird Fird Black</p>
                  <p class="price">320,000원</p>
                </div>
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">230 235 240 245 250 255</p>
              </div>                    
              </div>
              <div class="swiper-slide">
                <div class="img">
                  <a href="">
                    <img src="@/assets/images/best-01.jpg" alt="">
                  </a>
                </div>
                <div class="info">
                  <p class="brand">SALOMON</p>
                  <p class="name">살로몬 공용 ADV 스킨 12세트 Black</p>
                  <p class="price">230,000원</p>
                </div>
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">free</p>
              </div>                    
              </div>
              <div class="swiper-slide">
                <div class="img">
                  <a href="">
                    <img src="@/assets/images/best-02.jpg" alt="">
                  </a>
                </div>
                <div class="info">
                  <p class="brand">SALOMON</p>
                  <p class="name">살로몬 공용 S/LAB 펄사 3 Fird Fird Black</p>
                  <p class="price">320,000원</p>
                </div>
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">230 235 240 245 250 255</p>
              </div>                    
              </div>
              <div class="swiper-slide">
                <div class="img">
                  <a href="">
                    <img src="@/assets/images/best-01.jpg" alt="">
                  </a>
                </div>
                <div class="info">
                  <p class="brand">SALOMON</p>
                  <p class="name">살로몬 공용 ADV 스킨 12세트 Black</p>
                  <p class="price">230,000원</p>
                </div>
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">free</p>
              </div>                    
              </div>
              <div class="swiper-slide">
                <div class="img">
                  <a href="">
                    <img src="@/assets/images/best-02.jpg" alt="">
                  </a>
                </div>
                <div class="info">
                  <p class="brand">SALOMON</p>
                  <p class="name">살로몬 공용 S/LAB 펄사 3 Fird Fird Black</p>
                  <p class="price">320,000원</p>
                </div>
              <div class="info size-area">
                <p class="brand">SALOMON</p>
                <p class="size">230 235 240 245 250 255</p>
              </div>                    
              </div>
            </div>
          </div>            
        </div>
      </div>
    </div>
    <div class="kv">
      <Swiper
      :modules="[Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :speed=1500
      :pagination="{ clickable: true }"
    >
      <SwiperSlide>
        <img src="@/assets/images/kv-01.jpg" alt="" />
        <div class="text-area">
          <div class="kv-title">
            <p>안녕하세요. 퍼블리셔 박형석입니다.</p>
          </div>
          <p class="kv-sub-title">서브타이틀01 서브타이틀01 서브타이틀01</p>
          <p class="kv-text">
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트<br />
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/images/kv-02.jpg" alt="" />
        <div class="text-area">
          <div class="kv-title">
            <p>안녕하세요. 퍼블리셔 박형석입니다.</p>
          </div>
          <p class="kv-sub-title">서브타이틀02 서브타이틀02 서브타이틀02</p>
          <p class="kv-text">
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트<br />
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/images/kv-01.jpg" alt="" />
        <div class="text-area">
          <div class="kv-title">
            <p>안녕하세요. 퍼블리셔 박형석입니다.</p>
          </div>
          <p class="kv-sub-title">서브타이틀03 서브타이틀03 서브타이틀03</p>
          <p class="kv-text">
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트<br />
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/images/kv-02.jpg" alt="" />
        <div class="text-area">
          <div class="kv-title">
            <p>안녕하세요. 퍼블리셔 박형석입니다.</p>
          </div>
          <p class="kv-sub-title">서브타이틀04 서브타이틀04 서브타이틀04</p>
          <p class="kv-text">
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트<br />
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/images/kv-01.jpg" alt="" />
        <div class="text-area">
          <div class="kv-title">
            <p>안녕하세요. 퍼블리셔 박형석입니다.</p>
          </div>
          <p class="kv-sub-title">서브타이틀03 서브타이틀03 서브타이틀03</p>
          <p class="kv-text">
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트<br />
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/images/kv-02.jpg" alt="" />
        <div class="text-area">
          <div class="kv-title">
            <p>안녕하세요. 퍼블리셔 박형석입니다.</p>
          </div>
          <p class="kv-sub-title">서브타이틀04 서브타이틀04 서브타이틀04</p>
          <p class="kv-text">
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트<br />
            텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div> -->

  </main>
</template>
