(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[916], {
  1916: (e, n, t) => {
    t.r(n), t.d(n, { default: () => S }); const r = t(5893); const o = t(4611); const a = t(2327); const c = t(9161); const l = t(7294); let i = function () { return i = Object.assign || function (e) { for (var n, t = 1, r = arguments.length; t < r; t++) for (const o in n = arguments[t])Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]); return e; }, i.apply(this, arguments); }; const s = (0, l.memo)(((e) => {
      const n = e.className; const t = e.value; const a = e.onChange; const c = e.type; const s = void 0 === c ? 'text' : c; const u = e.placeholder; const f = e.autofocus; const d = (function (e, n) { const t = {}; for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols === 'function') { let o = 0; for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]); } return t; }(e, ['className', 'value', 'onChange', 'type', 'placeholder', 'autofocus'])); const p = (0, l.useRef)(null); const v = (0, l.useState)(!1); const h = v[0]; const m = v[1]; const y = (0, l.useState)(0); const g = y[0]; const b = y[1]; return (0, l.useEffect)((() => { let e; f && (m(!0), (e = p.current) === null || void 0 === e || e.focus()); }), [f]), (0, r.jsxs)('div', {
        className: (0, o.A)('LuFDUWoP', {}, [n]),
        children: [u && (0, r.jsx)('div', { className: 'emAQQ85i', children: ''.concat(u, '>') }), (0, r.jsxs)('div', {
          className: 'y1GiFC_L',
          children: [(0, r.jsx)('input', {
            ref: p, type: s, value: t, onChange(e) { a == null || a(e.target.value), b(e.target.value.length); }, className: 'LVdIPwcx', onFocus() { m(!0); }, onBlur() { m(!1); }, onSelect(e) { let n; b(((n = e == null ? void 0 : e.target) === null || void 0 === n ? void 0 : n.selectionStart) || 0); }, ...d,
          }), h && (0, r.jsx)('span', { className: 'lqMFGBuL', style: { left: ''.concat(9 * g, 'px') } })], 
})], 
});
    })); const u = t(6372); const f = { title: 'ikI7VPeL', text: 'uNJeeCm1', error: 'F9oLXAK4' }; let d; let p = function () { return p = Object.assign || function (e) { for (var n, t = 1, r = arguments.length; t < r; t++) for (const o in n = arguments[t])Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]); return e; }, p.apply(this, arguments); }; !(function (e) { e.PRIMARY = 'primary', e.ERROR = 'error'; }(d || (d = {}))); const v = function (e) { let n; const t = e.className; const a = e.text; const c = e.title; const l = e.theme; const i = void 0 === l ? d.PRIMARY : l; return (0, r.jsxs)('div', { className: (0, o.A)(f.Text, (n = {}, n[f[i]] = !0, n), [t]), children: [c && (0, r.jsx)('p', { className: f.title, children: c }), a && (0, r.jsx)('p', { className: f.text, children: a })] }); }; const h = function (e) { const n = e.children; const t = e.reducers; const o = e.removeAfterUnmount; const a = (0, u.oR)(); const c = (0, u.I0)(); return (0, l.useEffect)((() => (Object.entries(t).forEach(((e) => { const n = e[0]; const t = e[1]; a.reducerManager.add(n, t), c({ type: '@INIT '.concat(n, ' reducer') }); })), function () { o && Object.entries(t).forEach(((e) => { const n = e[0]; e[1], a.reducerManager.remove(n), c({ type: '@DESTROY '.concat(n, ' reducer') }); })); })), []), (0, r.jsx)(r.Fragment, { children: n }); }; const m = function (e) { let n; return ((n = e == null ? void 0 : e.loginForm) === null || void 0 === n ? void 0 : n.username) || ''; }; const y = function (e) { let n; return ((n = e == null ? void 0 : e.loginForm) === null || void 0 === n ? void 0 : n.password) || ''; }; const g = function (e) { let n; return ((n = e == null ? void 0 : e.loginForm) === null || void 0 === n ? void 0 : n.isLoading) || !1; }; const b = function (e) { let n; return (n = e == null ? void 0 : e.loginForm) === null || void 0 === n ? void 0 : n.error; }; const x = t(7168); const j = t(9669); const w = t.n(j); const O = t(3372); const N = t(7665); const C = (0, x.hg)('login/loginByUsername', ((e, n) => {
      return t = void 0, r = void 0, a = function () {
        let t; let r; return (function (e, n) {
          let t; let r; let o; let a; let c = {
            label: 0, sent() { if (1 & o[0]) throw o[1]; return o[1]; }, trys: [], ops: [],
          }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (i) { return (function (l) { if (t) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (c = 0)), c;) try { if (t = 1, r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done) return o; switch (r = 0, o && (l = [2 & l[0], o.value]), l[0]) { case 0: case 1: o = l; break; case 4: return c.label++, { value: l[1], done: !1 }; case 5: c.label++, r = l[1], l = [0]; continue; case 7: l = c.ops.pop(), c.trys.pop(); continue; default: if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || l[0] !== 6 && l[0] !== 2)) { c = 0; continue; } if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) { c.label = l[1]; break; } if (l[0] === 6 && c.label < o[1]) { c.label = o[1], o = l; break; } if (o && c.label < o[2]) { c.label = o[2], c.ops.push(l); break; }o[2] && c.ops.pop(), c.trys.pop(); continue; }l = n.call(e, c); } catch (e) { l = [6, e], r = 0; } finally { t = o = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, i])); }; }
        }(this, ((o) => { switch (o.label) { case 0: return o.trys.push([0, 2,, 3]), [4, w().post('http://localhost:8000/login', e)]; case 1: if (!(t = o.sent()).data) throw new Error(); return localStorage.setItem(N.z, JSON.stringify(t.data)), n.dispatch(O.hI.setAuthData(t.data)), [2, t.data]; case 2: return r = o.sent(), console.log(r), [2, n.rejectWithValue('error')]; case 3: return [2]; } })));
      }, new ((o = void 0) || (o = Promise))(((e, n) => { function c(e) { try { i(a.next(e)); } catch (e) { n(e); } } function l(e) { try { i(a.throw(e)); } catch (e) { n(e); } } function i(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof o ? t : new o(((e) => { e(t); }))).then(c, l); }i((a = a.apply(t, r || [])).next()); })); let t; let r; let o; let a;
    })); const P = (0, x.oM)({
      name: 'login', initialState: { isLoading: !1, username: '', password: '' }, reducers: { setUsername(e, n) { e.username = n.payload; }, setPassword(e, n) { e.password = n.payload; } }, extraReducers(e) { e.addCase(C.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(C.fulfilled, ((e) => { e.isLoading = !1; })).addCase(C.rejected, ((e, n) => { e.isLoading = !1, e.error = n.payload; })); },
    }); const k = P.actions; const R = P.reducer; const E = 'PQPa1eB5'; let I = function () { return I = Object.assign || function (e) { for (var n, t = 1, r = arguments.length; t < r; t++) for (const o in n = arguments[t])Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]); return e; }, I.apply(this, arguments); }; const L = { loginForm: R }; const S = (0, l.memo)(((e) => {
      const n = e.className; const { t } = (0, a.$)(); const i = (0, u.I0)(); const f = (0, u.v9)(m); const p = (0, u.v9)(y); const x = (0, u.v9)(g); const j = (0, u.v9)(b); const w = (0, l.useCallback)(((e) => { i(k.setUsername(e)); }), [i]); const O = (0, l.useCallback)(((e) => { i(k.setPassword(e)); }), [i]); const N = (0, l.useCallback)((() => { i(C({ username: f, password: p })); }), [i, p, f]); return (0, r.jsx)(h, {
        removeAfterUnmount: !0,
        reducers: L,
        children: (0, r.jsxs)('div', {
          className: (0, o.A)('xYNEfcE9', {}, [n]),
          children: [(0, r.jsx)(v, { title: t('Форма авторизации') }), j && (0, r.jsx)(v, { text: t('Вы ввели неверный логин или пароль'), theme: d.ERROR }), (0, r.jsx)(s, {
            autofocus: !0, type: 'text', className: E, placeholder: t('Введите username'), onChange: w, value: f,
          }), (0, r.jsx)(s, {
            type: 'text', className: E, placeholder: t('Введите пароль'), onChange: O, value: p,
          }), (0, r.jsx)(c.zx, {
            theme: c.bn.OUTLINE, className: 'Ok_5amJo', onClick: N, disabled: x, children: t('Войти'),
          })],
        }),
      });
    }));
  },
}]);
