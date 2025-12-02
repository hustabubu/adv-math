/**
 * rem2pxNum
 * @param rem rem value string
 * @param defalutPxNumber default px number
 * @returns px number
 */
export function rem2pxNum(rem: string, defalutPxNumber: number = 16) {

  return parseFloat(rem.replace('rem', '')) * defalutPxNumber;
}

/**
 * 
 * @param tagName 
 * @param attrs 
 * @returns 
 */

export function createElement(elementName: string, attrs: any) {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const el = document.createElementNS(SVG_NS, elementName);
  for (const attr in attrs) {
    el.setAttribute(attr, attrs[attr]);
  }
  return el;
}

/**
 * 生成随机id
 * @param length 随机id的长度
 * @returns 随机id
 */

export function makeId(length = 5) {
  const result = []
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++)
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
  return result.join('')
}

/**
 * 防抖函数
 * @param fn 要执行的函数
 * @param wait 延迟时间
 * @returns 防抖函数
 */

export function debounce(fn: Function, wait: number) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (typeof wait !== 'number') {
    throw new TypeError('Expected a number for wait');
  }
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (this: any, ...args: any[]) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.apply(this, args);
      timeout = null; // 清除引用，便于垃圾回收
    }, wait);
  };
}

/**
 * 节流函数
 * @param fn 要执行的函数
 * @param wait 延迟时间
 * @returns 节流函数
 */

export function throttle(fn: Function, wait: number) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (typeof wait !== 'number') {
    throw new TypeError('Expected a number for wait');
  }
  let lastTime = 0;
  return function (this: any, ...args: any[]) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}
