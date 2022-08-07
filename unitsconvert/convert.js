const Energy = {
  data() {
    return {
      hartree: 1,
      get ev() {return this.hartree * 27.21138602;},
      set ev(val) {this.hartree = val / 27.21138602;},
      get kj() {return this.hartree * 2625.499638;},
      set kj(val) {this.hartree = val / 2625.499638;},
      get kcal() {return this.hartree * 627.509474;},
      set kcal(val) {this.hartree = val / 627.509474;},
      get cm() {return this.hartree * 219474.6313702;},
      set cm(val) {this.hartree = val / 219474.6313702;},
      get thz() {return this.hartree * 6579.683920711;},
      set thz(val) {this.hartree = val / 6579.683920711;},
      get k() {return this.hartree * 315775.13;},
      set k(val) {this.hartree = val / 315775.13;},
      get ry() {return this.hartree * 2.0;},
      set ry(val) {this.hartree = val / 2.0;},
    }
  },
};
Vue.createApp(Energy).mount('#Energy');

const Length = {
  data() {
    return {
      a0: 1,
      get ang() {return this.a0 * 0.52917721067;},
      set ang(val) {this.a0 = val / 0.52917721067;}, 
      get nm() {return this.ang * 0.1;},
      set nm(val) {this.ang = val / 0.1;}, 
    }
  },
};
Vue.createApp(Length).mount('#Length');

const Time = {
  data() {
    return {
      s: 1,
      get m() {return this.s / 60;},
      set m(val) {this.s = val * 60;}, 
      get h() {return this.m / 60;},
      set h(val) {this.m = val * 60;}, 
      get d() {return this.h / 24;},
      set d(val) {this.h = val * 24;}, 
    }
  },
};
Vue.createApp(Time).mount('#Time');

const sTime = {
  data() {
    return {
      au: 1,
      get fs() {return this.au * 2.418884326509e-2;},
      set fs(val) {this.au = val /2.418884326509e-2;}, 
      get ps() {return this.fs / 1000;},
      set ps(val) {this.fs = val *1000;}, 
      get ns() {return this.ps / 1000;},
      set ns(val) {this.ps = val * 1000;}, 
    }
  },
};
Vue.createApp(sTime).mount('#sTime');

const Byte = {
  data() {
    return {
      bit: 1,
      get B() {return this.bit /8;},
      set B(val) {this.bit = val *8;}, 
      get B2() {return this.B /2;},
      set B2(val) {this.B = val *2;}, 
      get B4() {return this.B /4;},
      set B4(val) {this.B = val *4;}, 
      get B8() {return this.B /8;},
      set B8(val) {this.B = val *8;}, 
      get B16() {return this.B /16;},
      set B16(val) {this.B = val *16;}, 
    }
  },
};
Vue.createApp(Byte).mount('#Byte');
