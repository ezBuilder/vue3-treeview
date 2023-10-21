import { inject as se, ref as S, computed as o, defineAsyncComponent as Le, resolveComponent as J, openBlock as I, createElementBlock as L, normalizeStyle as G, Fragment as Be, renderList as Fe, createBlock as Y, withCtx as B, renderSlot as $, toRefs as Ie, provide as we, onUnmounted as Pe, createVNode as be, mergeProps as qe, watch as K, nextTick as Re, normalizeClass as H, createElementVNode as ae, createCommentVNode as U, onMounted as Ae, withKeys as z, withModifiers as O, withDirectives as Me, vModelText as ze, toDisplayString as Ve, Transition as xe } from "vue";
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function de(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ue(e) {
  return e == null;
}
var Ge = Ue;
const g = /* @__PURE__ */ de(Ge);
var Te = 1 / 0, We = 17976931348623157e292, Oe = 0 / 0, Ye = "[object Symbol]", Ke = /^\s+|\s+$/g, He = /^[-+]0x[0-9a-f]+$/i, Je = /^0b[01]+$/i, Xe = /^0o[0-7]+$/i, Qe = parseInt, Ze = Object.prototype, _e = Ze.toString;
function Se(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function et(e) {
  return !!e && typeof e == "object";
}
function tt(e) {
  return typeof e == "symbol" || et(e) && _e.call(e) == Ye;
}
function nt(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = rt(e), e === Te || e === -Te) {
    var t = e < 0 ? -1 : 1;
    return t * We;
  }
  return e === e ? e : 0;
}
function ot(e) {
  var t = nt(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function rt(e) {
  if (typeof e == "number")
    return e;
  if (tt(e))
    return Oe;
  if (Se(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Se(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Ke, "");
  var n = Je.test(e);
  return n || Xe.test(e) ? Qe(e.slice(2), n ? 2 : 8) : He.test(e) ? Oe : +e;
}
var at = ot;
const lt = /* @__PURE__ */ de(at), ue = 8, st = "disabled", ut = "focused", dt = "draggable", it = "droppable", ct = "node-over", vt = "node-in", ft = "node-under", pt = "0 0 123.958 123.959", gt = "M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56C125.979,34.417,123.279,28.017,117.979,28.017z", ht = "M38.217,1.779c-3.8-3.8-10.2-1.1-10.2,4.2v112c0,5.3,6.4,8,10.2,4.2l56-56c2.3-2.301,2.3-6.101,0-8.401L38.217,1.779z", je = "black";
function ye(e) {
  return {
    type: "shape",
    width: ue,
    height: ue,
    viewBox: pt,
    stroke: je,
    fill: je,
    draw: e,
    name: null,
    src: null,
    alt: null,
    style: null,
    class: null
  };
}
const X = {
  roots: [],
  padding: 16,
  editable: !1,
  editing: null,
  checkboxes: !1,
  dragAndDrop: !1,
  keyboardNavigation: !1,
  openedIcon: ye(gt),
  closedIcon: ye(ht)
};
function bt(e) {
  const t = se("state"), n = t.config, r = t.nodes, s = S(e.depth), l = S(e.parentId), c = o(() => {
    const v = [];
    if (g(l.value) && n.value.roots && s.value === 0) {
      for (const p of n.value.roots)
        u(p, v);
      return v;
    }
    if (!g(l.value)) {
      const p = r.value[l.value];
      if (p && p.children && p.children.length > 0)
        for (const k of p.children)
          u(k, v);
      return v;
    }
    return [];
  }), u = (v, p) => {
    r.value[v] && (r.value[v].id = v, r.value[v].parent = l.value, p.push(r.value[v]));
  }, a = o(() => (/* @__PURE__ */ new Date()).valueOf()), b = o(() => {
    if (s.value === 0)
      return 0;
    if (g(n.value.padding))
      return X.padding;
    const v = lt(n.value.padding);
    return v >= 0 ? v : 0;
  }), y = o(() => ({
    "padding-left": `${b.value}px`,
    "list-style": "none"
  }));
  return {
    id: a,
    level: c,
    padding: b,
    style: y
  };
}
const Q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, yt = {
  components: {
    TreeNode: Le(() => Promise.resolve().then(() => gn))
  },
  props: {
    depth: {
      required: !0,
      type: Number,
      default: null
    },
    parentId: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return {
      ...bt(e)
    };
  }
}, kt = ["id"];
function mt(e, t, n, r, s, l) {
  const c = J("TreeNode");
  return I(), L("ul", {
    class: "tree-level",
    id: e.id,
    style: G(e.style)
  }, [
    (I(!0), L(Be, null, Fe(e.level, (u, a) => (I(), Y(c, {
      key: u.id,
      node: u,
      depth: n.depth,
      index: a,
      "parent-id": n.parentId
    }, {
      "loading-slot": B((b) => [
        $(e.$slots, "loading-slot", {
          node: b.node
        })
      ]),
      "before-input": B((b) => [
        $(e.$slots, "before-input", {
          node: b.node
        })
      ]),
      "after-input": B((b) => [
        $(e.$slots, "after-input", {
          node: b.node
        })
      ]),
      _: 2
    }, 1032, ["node", "depth", "index", "parent-id"]))), 128))
  ], 12, kt);
}
const Ee = /* @__PURE__ */ Q(yt, [["render", mt]]), Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ee
}, Symbol.toStringTag, { value: "Module" }));
var It = 1 / 0, wt = "[object Symbol]", Tt = typeof re == "object" && re && re.Object === Object && re, Ot = typeof self == "object" && self && self.Object === Object && self, St = Tt || Ot || Function("return this")(), jt = Object.prototype, Nt = 0, Dt = jt.toString, Ne = St.Symbol, De = Ne ? Ne.prototype : void 0, $e = De ? De.toString : void 0;
function $t(e) {
  if (typeof e == "string")
    return e;
  if (Bt(e))
    return $e ? $e.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -It ? "-0" : t;
}
function Lt(e) {
  return !!e && typeof e == "object";
}
function Bt(e) {
  return typeof e == "symbol" || Lt(e) && Dt.call(e) == wt;
}
function Pt(e) {
  return e == null ? "" : $t(e);
}
function Rt(e) {
  var t = ++Nt;
  return Pt(e) + t;
}
var Et = Rt;
const Ft = /* @__PURE__ */ de(Et), ke = /* @__PURE__ */ new Map();
function qt(e) {
  const { nodes: t, config: n } = Ie(e), r = {
    id: Ft(),
    nodes: o(() => t.value),
    config: o(() => n.value),
    focusable: S(null),
    focusFunc: /* @__PURE__ */ new Map(),
    dragged: S({
      node: null,
      element: null,
      wrapper: null,
      parentId: null
    })
  };
  return ke.set(r.id, r), r.id;
}
function At(e, t) {
  const n = S(null), r = qt(e), s = ke.get(r);
  we("emitter", t), we("state", s);
  const l = o(() => ({
    display: "flex",
    "align-items": "center"
  }));
  return Pe(() => {
    ke.delete(r);
  }), {
    element: n,
    style: l
  };
}
const Mt = {
  components: {
    TreeLevel: Ee
  },
  props: {
    nodes: {
      required: !0,
      type: Object,
      default: () => {
      }
    },
    config: {
      required: !0,
      type: Object,
      default: () => {
      }
    }
  },
  setup(e, { emit: t }) {
    return {
      ...At(e, t)
    };
  },
  methods: {
    setElementRef(e) {
      this.element = e;
    }
  }
};
function zt(e, t, n, r, s, l) {
  const c = J("TreeLevel");
  return I(), L("div", {
    class: "tree",
    ref: l.setElementRef,
    style: G(e.style)
  }, [
    be(c, qe({
      depth: 0,
      "parent-id": null
    }, e.$attrs), {
      "loading-slot": B((u) => [
        $(e.$slots, "loading-slot", {
          node: u.node
        })
      ]),
      "before-input": B((u) => [
        $(e.$slots, "before-input", {
          node: u.node
        })
      ]),
      "after-input": B((u) => [
        $(e.$slots, "after-input", {
          node: u.node
        })
      ]),
      _: 3
    }, 16)
  ], 4);
}
const bn = /* @__PURE__ */ Q(Mt, [["render", zt]]);
function Vt(e, t) {
  return e === t || e !== e && t !== t;
}
var xt = Vt;
const me = /* @__PURE__ */ de(xt), x = {
  opened: "nodeOpened",
  closed: "nodeClosed",
  focus: "nodeFocus",
  toggle: "nodeToggle",
  blur: "nodeBlur",
  edit: "nodeEdit"
}, Ce = {
  checked: "nodeChecked",
  unchecked: "nodeUnchecked"
}, V = {
  start: "nodeDragstart",
  end: "nodeDragend",
  enter: "nodeDragenter",
  leave: "nodeDragleave",
  over: "nodeOver",
  drop: "nodeDrop"
};
function Ut(e) {
  const t = e.node, n = e.config, r = e.wrapper, s = e.editable, l = e.editing, c = S(null), u = o({
    get: () => t.value.text,
    set: (p) => t.value.text = p
  }), a = o(() => e.editable.value ? n.value.editableClass ? n.value.editableClass : "editable" : null);
  K(l, (p, k) => {
    !me(p, k) && p && Re(() => {
      c.value.focus();
    });
  });
  const b = () => {
    s.value && !e.disabled.value && (n.value.editing = t.value.id, e.root.emit(x.edit, t.value));
  };
  return {
    text: u,
    input: c,
    editing: l,
    editable: s,
    editableClass: a,
    focusInput: b,
    esc: (p) => {
      s.value && n.value.keyboardNavigation && (e.blur(p), r.value.focus());
    },
    enter: () => {
      s.value && !e.disabled.value && n.value.keyboardNavigation && b();
    }
  };
}
function Gt(e) {
  const { isLeaf: t } = Ie(e), r = se("state").config, s = o(() => r.value.openedIcon || X.openedIcon), l = o(() => r.value.closedIcon || X.closedIcon), c = o(() => !g(l.value) && !g(s.value)), u = o(() => !t.value && c.value), a = o(() => ({
    width: `${ue}px`,
    height: `${ue}px`
  }));
  return {
    hasIcons: c,
    openedIcon: s,
    closedIcon: l,
    useIcons: u,
    fakeNodeStyle: a
  };
}
const Wt = {
  props: {
    icon: {
      required: !0,
      type: Object
    }
  }
}, Yt = ["width", "height", "viewBox"], Kt = ["d", "fill", "stroke", "stroke-width"], Ht = ["src", "alt", "width", "height"];
function Jt(e, t, n, r, s, l) {
  return n.icon.type === "shape" ? (I(), L("svg", {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    width: n.icon.width,
    height: n.icon.height,
    class: H(n.icon.class),
    style: G(n.icon.style),
    viewBox: n.icon.viewBox
  }, [
    ae("path", {
      d: n.icon.draw,
      fill: n.icon.fill,
      stroke: n.icon.stroke,
      "stroke-width": n.icon.strokeWidth
    }, null, 8, Kt)
  ], 14, Yt)) : n.icon.type === "class" ? (I(), L("i", {
    key: 1,
    class: H(n.icon.class),
    style: G(n.icon.style)
  }, null, 6)) : n.icon.type === "img" ? (I(), L("img", {
    key: 2,
    src: n.icon.src,
    alt: n.icon.alt,
    width: n.icon.width,
    height: n.icon.height,
    class: H(n.icon.class),
    style: G(n.icon.style)
  }, null, 14, Ht)) : U("", !0);
}
const Xt = /* @__PURE__ */ Q(Wt, [["render", Jt]]), Qt = {
  components: {
    Icon: Xt
  },
  props: {
    isLeaf: {
      type: Boolean
    },
    opened: {
      type: Boolean
    }
  },
  setup(e) {
    return Gt(e);
  },
  computed: {
    fakeIcon() {
      return ye(null);
    }
  }
};
function Zt(e, t, n, r, s, l) {
  const c = J("Icon");
  return e.useIcons ? (I(), L(Be, { key: 0 }, [
    n.opened ? (I(), Y(c, {
      key: 0,
      icon: e.openedIcon
    }, null, 8, ["icon"])) : (I(), Y(c, {
      key: 1,
      icon: e.closedIcon
    }, null, 8, ["icon"]))
  ], 64)) : (I(), Y(c, {
    key: 1,
    icon: l.fakeIcon
  }, null, 8, ["icon"]));
}
const _t = /* @__PURE__ */ Q(Qt, [["render", Zt]]);
function en(e, t) {
  const n = e.state, r = e.node, s = e.config, l = e.wrapper, c = e.editing, u = S(null), a = S(t.depth), b = S(t.index);
  r.value.children || (r.value.children = S([]).value);
  const y = o(() => v.value && r.value.id), v = o(() => !g(r)), p = o(() => v.value && !g(r.value.state)), k = o(() => s.value.roots || []), w = o(() => g(r.value.children) ? [] : r.value.children), D = o(() => w.value.length), T = o(() => D.value > 0), m = o(() => p.value && r.value.state.opened || !1), h = o(() => p.value && r.value.state.isLoading || !1), E = o(() => h.value && !T.value && m.value), N = o(() => !h.value && T.value && m.value), F = o(() => ({
    display: "flex"
  })), ie = o(() => e.disabled.value ? s.value.disabledClass ? s.value.disabledClass : st : null), Z = o(() => {
    for (const f of k.value) {
      const i = n.nodes.value[f];
      if (i.children && i.children.length > 0)
        return !1;
    }
    return !0;
  }), _ = o(() => {
    if (s.value.leaves instanceof Array) {
      const i = s.value.leaves.indexOf(y.value);
      return Number.isFinite(i) && i >= 0;
    }
    return !T.value;
  }), ce = o(() => n.focusable.value === r.value.id), ee = o(() => a.value === 0 && b.value === 0 && g(n.focusable.value) || ce.value ? 0 : -1), ve = o(() => e.focused.value ? s.value.focusClass ? s.value.focusClass : ut : null);
  K(m, (f) => {
    f ? e.root.emit(x.opened, r.value) : e.root.emit(x.closed, r.value);
  });
  const P = () => {
    n.focusable.value = r.value.id, Re(() => {
      l.value.focus(), e.focused.value = !0, e.root.emit(x.focus, r.value);
    });
  }, fe = () => {
    r.value.state.opened = !r.value.state.opened, e.root.emit(x.toggle, r.value);
  }, pe = () => {
    !c.value && s.value.keyboardNavigation && (r.value.state.opened = !0);
  }, ge = () => {
    !c.value && s.value.keyboardNavigation && (r.value.state.opened = !1);
  }, te = (f) => {
    const i = f(r.value.id);
    if (!g(i) && s.value.keyboardNavigation) {
      const C = n.focusFunc.get(i);
      C && C();
    }
  }, he = () => te(oe), ne = (f) => {
    const i = n.nodes.value[f];
    if (i.children && i.children.length > 0) {
      const C = i.children.indexOf(r.value.id), M = i.children[C - 1];
      if (!g(M))
        return d(M);
    }
    return i.id;
  }, oe = (f) => {
    const i = n.nodes.value[f], C = n.nodes.value[i.parent];
    if (!C) {
      const M = k.value.indexOf(f);
      return d(k.value[M - 1]) || null;
    }
    return ne(C.id);
  }, d = (f) => {
    const i = n.nodes.value[f];
    if (!i)
      return null;
    if (i.children && i.children.length > 0 && i.state.opened) {
      const C = i.children[i.children.length - 1];
      if (!g(C))
        return d(C);
    }
    return i.id;
  }, j = () => te(R), q = (f) => {
    const i = k.value.indexOf(f);
    return k.value[i + 1] || null;
  }, A = (f, i) => {
    const C = f.children.indexOf(i);
    return f.children[C + 1] ? f.children[C + 1] : f.parent ? A(n.nodes.value[f.parent], f.id) : q(f.id);
  }, R = (f) => {
    const i = n.nodes.value[f];
    if (i.children && i.children.length > 0 && i.state.opened)
      return i.children[0];
    const C = n.nodes.value[i.parent];
    return C ? A(C, f) : q(f);
  };
  return Ae(() => {
    n.focusFunc.set(r.value.id, P);
  }), Pe(() => {
    n.focusFunc.delete(r.value.id);
  }), {
    id: y,
    level: u,
    style: F,
    opened: m,
    hasNode: v,
    hideIcons: Z,
    hasChildren: T,
    tabIndex: ee,
    focusClass: ve,
    disabledClass: ie,
    isLeaf: _,
    isLoading: h,
    displayLoading: E,
    displayLevel: N,
    right: pe,
    left: ge,
    up: he,
    down: j,
    toggle: fe,
    focus: P,
    prevVisible: oe,
    nextVisible: R
  };
}
function le(e) {
  g(e.state) && (e.state = {}, e.state.checked = !1);
}
function tn(e, t) {
  const n = (h) => {
    e.value.state.checked = h;
  }, r = (h) => {
    e.value.state.indeterminate = h;
  }, s = () => {
    le(e.value), (e.value.state.checked || !c.value) && r(!1);
  }, l = o(() => e.value.children), c = o(() => !g(l.value) && l.value.length > 0 || !1), u = o(() => {
    if (!c.value)
      return [];
    const h = [];
    for (const E of l.value) {
      const N = t.value[E];
      g(N) || (le(N), h.push(N.state));
    }
    return h;
  }), a = o(() => e.value.state.checked), b = o(() => e.value.state.indeterminate), y = o(() => u.value.every((h) => h.checked)), v = o(() => u.value.every((h) => !h.checked)), p = o(() => !y.value && !v.value), k = o(() => u.value.some((h) => h.indeterminate)), w = (h) => {
    if (!g(h.state) && !g(h.children))
      for (const E of h.children) {
        const N = t.value[E];
        g(N) || (le(N), N.state.indeterminate = !1, N.state.checked = h.state.checked, w(N));
      }
  }, D = () => {
    if (c.value) {
      if (v.value && !k.value) {
        r(!1), n(!1);
        return;
      }
      if (y.value) {
        r(!1), n(!0);
        return;
      }
      r(!0), n(!1);
    }
  };
  return {
    checked: a,
    indeterminate: b,
    noneChecked: v,
    someChecked: p,
    allChecked: y,
    someIndeterminate: k,
    click: () => {
      r(!1), n(!e.value.state.checked);
    },
    rebuild: () => {
      s(), w(e.value), D();
    },
    updateState: D,
    recurseDown: w
  };
}
function nn(e) {
  const t = o(() => e.value.state.checked), n = o(() => e.value.state.indeterminate || !1), r = o(() => !1), s = o(() => !1), l = o(() => !1), c = o(() => !1);
  return {
    checked: t,
    indeterminate: n,
    noneChecked: r,
    someChecked: s,
    allChecked: l,
    someIndeterminate: c,
    click: () => {
      e.value.state.checked = !e.value.state.checked;
    },
    rebuild: () => {
    },
    updateState: () => {
    },
    recurseDown: () => {
    }
  };
}
var W = /* @__PURE__ */ ((e) => (e[e.auto = 0] = "auto", e[e.manual = 1] = "manual", e))(W || {});
function on(e) {
  const t = e.node, n = e.config, r = e.state.nodes, s = o(() => n.value.checkMode === W.auto ? W.auto : W.manual), l = o(() => s.value === W.auto ? tn(t, r) : nn(t));
  K(s, (T, m) => {
    me(T, m) || l.value.rebuild();
  });
  const c = o(() => l.value.checked.value), u = o(() => l.value.indeterminate.value), a = o(() => n.value.checkboxes || X.checkboxes), b = o(() => [
    l.value.checked.value ? n.value.checkedClass ? n.value.checkedClass : "checked" : null,
    l.value.indeterminate.value ? n.value.indeterminateClass ? n.value.indeterminateClass : "indeterminate" : null
  ]), y = o(() => l.value.allChecked.value), v = o(() => l.value.noneChecked.value), p = o(() => l.value.someChecked.value), k = o(() => l.value.someIndeterminate.value);
  K([y, v, p], ([T, m, h]) => {
    (T || m || h) && l.value.updateState();
  }, { deep: !0 }), K(k, (T, m) => {
    me(T, m) || l.value.updateState();
  }, { deep: !0 });
  const w = () => {
    e.disabled.value || (l.value.click(), l.value.recurseDown(t.value), e.root.emit(c.value ? Ce.checked : Ce.unchecked, t.value));
  };
  return {
    checked: c,
    hasCheckbox: a,
    indeterminate: u,
    checkedClass: b,
    space: () => {
      !e.editing.value && n.value.checkboxes && n.value.keyboardNavigation && w();
    },
    clickCheckbox: w
  };
}
function rn(e, t) {
  const n = e.node, r = e.state, s = S(t.parentId), l = e.config, c = r.nodes, u = S(r.dragged), a = e.wrapper, b = S(null), y = S(null), v = o(() => !e.disabled.value && l.value.dragAndDrop && n.value.state.draggable !== !1), p = o(() => l.value.dragAndDrop && n.value.state.dropable !== !1), k = o(() => !g(u.value) && !g(u.value.node)), w = o(() => k.value && u.value.node.id === n.value.id), D = o(() => h.value === T.value), T = o(() => !k.value || !u.value.parentId ? null : Z(u.value.parentId)), m = o(() => _(T.value)), h = o(() => g(s.value) ? null : Z(s.value)), E = o(() => _(h.value)), N = o(() => !k.value || !u.value.wrapper ? !1 : u.value.element.contains(b.value)), F = o(() => ({
    dragged: u.value,
    target: {
      node: n.value.id,
      element: b.value,
      wrapper: a.value,
      parentId: s.value
    }
  })), ie = o(() => [
    v.value ? dt : null,
    p.value ? it : null,
    y.value === 0 ? ct : null,
    y.value === 1 ? vt : null,
    y.value === 2 ? ft : null
  ]), Z = (d) => g(d) ? null : c.value[d], _ = (d) => g(d) ? l.value.roots : d.children, ce = (d) => {
    if (!d || !d.dataTransfer)
      return null;
    const j = d.dataTransfer.getData("application/json");
    return j ? JSON.parse(j) : d.dataTransfer.getData("text/plain");
  }, ee = (d) => {
    var j, q;
    return ((q = (j = d == null ? void 0 : d.dataTransfer) == null ? void 0 : j.items) == null ? void 0 : q.length) > 0;
  }, ve = (d) => {
    v.value && (u.value = {
      node: n.value,
      element: b.value,
      wrapper: a.value,
      parentId: s.value
    }, e.root.emit(V.start, { ...F.value, ...P(d) }));
  }, P = (d) => ({
    evt: d,
    external: ee(d),
    dataTransfer: ce(d)
  }), fe = (d) => {
    e.root.emit(V.end, { ...F.value, ...P(d) }), u.value = null;
  }, pe = (d) => {
    e.root.emit(V.enter, { ...F.value, ...P(d) });
  }, ge = (d) => {
    e.root.emit(V.leave, { ...F.value, ...P(d) }), y.value = null;
  }, te = (d) => {
    if (!w.value && !N.value) {
      const j = ee(d);
      if (!k.value && !j)
        return;
      if (e.root.emit(V.over, { ...F.value, ...P(d) }), !j && a.value) {
        const A = d.pageY, R = a.value.getBoundingClientRect(), f = R.top + R.height / 2, i = [
          f - R.height * 0.3,
          f + R.height * 0.3
        ], C = m.value.indexOf(n.value.id), M = m.value.indexOf(u.value.node.id);
        A < i[0] && (!D.value || D.value && C !== M + 1) ? y.value = 0 : A > i[1] && (!D.value || D.value && C !== M - 1) ? y.value = 2 : y.value = 1;
      }
    }
  }, he = (d) => {
    if (!w.value && !N.value)
      switch (y.value) {
        case 0: {
          ne(0);
          break;
        }
        case 2: {
          ne(1);
          break;
        }
        case 1:
          oe();
      }
    e.root.emit(V.drop, { ...F.value, ...P(d) }), y.value = null;
  }, ne = (d) => {
    if (k.value) {
      const j = u.value.node.id, q = m.value.indexOf(j);
      m.value.splice(q, 1);
      const A = n.value.id, R = E.value.indexOf(A);
      E.value.splice(R + d, 0, j);
    }
  }, oe = () => {
    if (k.value && p.value) {
      const d = u.value.node.id;
      if (m.value) {
        const j = m.value.indexOf(d);
        m.value.splice(j, 1);
      }
      n.value.children.unshift(d);
    }
  };
  return {
    pos: y,
    element: b,
    dragClass: ie,
    draggable: v,
    droppable: p,
    dragstart: ve,
    dragend: fe,
    dragenter: pe,
    dragleave: ge,
    dragover: te,
    drop: he
  };
}
function an(e) {
  const { node: t } = Ie(e), n = se("state"), r = n.config, s = S(null), l = S(!1), c = {
    emit: se("emitter")
  };
  le(t.value);
  const u = o(() => !g(t)), a = o(() => !g(r.value)), b = o(() => u.value && !g(t.value.state)), y = o(() => r.value.disabled || t.value.state.disabled), v = o(() => r.value.editable && (g(t.value.state.editable) ? !0 : t.value.state.editable) || X.editable), p = o(() => v.value && r.value.editing === t.value.id);
  return {
    state: n,
    node: t,
    config: r,
    hasNode: u,
    hasState: b,
    hasConfig: a,
    disabled: y,
    wrapper: s,
    editable: v,
    editing: p,
    focused: l,
    blur: (w) => {
      if (w.type === "blur") {
        const D = w.currentTarget, T = w.relatedTarget;
        D.contains(T) || (r.value.editing = null, l.value = !1, c.emit(x.blur, w, t.value));
      }
    },
    root: c
  };
}
const ln = {
  components: {
    TreeLevel: Le(() => Promise.resolve().then(() => Ct)),
    TreeIcons: _t
  },
  emits: [
    ...Object.values(x),
    ...Object.values(Ce),
    ...Object.values(V)
  ],
  props: {
    depth: {
      required: !0,
      type: Number
    },
    index: {
      required: !0,
      type: Number
    },
    node: {
      required: !0,
      type: Object
    },
    parentId: {
      default: null,
      type: String
    }
  },
  setup(e) {
    const t = an(e);
    return {
      ...t,
      ...Ut(t),
      ...on(t),
      ...en(t, e),
      ...rn(t, e)
    };
  },
  computed: {
    nodeClass() {
      return [
        this.focusClass,
        this.disabledClass,
        this.checkedClass,
        this.editableClass,
        this.dragClass
      ];
    }
  },
  methods: {
    setWrapperRef(e) {
      this.wrapper = e;
    },
    setLevelRef(e) {
      this.level = e;
    },
    setElementRef(e) {
      this.element = e;
    },
    setInputRef(e) {
      this.input = e;
    }
  }
}, sn = ["aria-expanded"], un = ["draggable", "tabindex"], dn = ["checked", "disabled", ".indeterminate"], cn = { class: "input-wrapper" }, vn = ["disabled"];
function fn(e, t, n, r, s, l) {
  const c = J("TreeIcons"), u = J("TreeLevel");
  return e.hasNode ? (I(), L("li", {
    key: 0,
    class: "tree-node",
    ref: l.setElementRef,
    "aria-expanded": e.opened,
    onKeydown: [
      t[13] || (t[13] = z(O((...a) => e.enter && e.enter(...a), ["stop"]), ["enter"])),
      t[14] || (t[14] = z(O((...a) => e.esc && e.esc(...a), ["stop"]), ["esc"])),
      t[15] || (t[15] = z(O((...a) => e.space && e.space(...a), ["stop"]), ["space"])),
      t[16] || (t[16] = z(O((...a) => e.left && e.left(...a), ["stop"]), ["left"])),
      t[17] || (t[17] = z(O((...a) => e.right && e.right(...a), ["stop"]), ["right"])),
      t[18] || (t[18] = z(O((...a) => e.up && e.up(...a), ["stop"]), ["up"])),
      t[19] || (t[19] = z(O((...a) => e.down && e.down(...a), ["stop"]), ["down"]))
    ]
  }, [
    ae("div", {
      class: H(["node-wrapper", l.nodeClass]),
      style: G(e.style),
      ref: l.setWrapperRef,
      draggable: e.draggable,
      tabindex: e.tabIndex,
      onBlur: t[5] || (t[5] = (...a) => e.blur && e.blur(...a)),
      onClick: t[6] || (t[6] = O((...a) => e.focus && e.focus(...a), ["stop"])),
      onDragstart: t[7] || (t[7] = O((...a) => e.dragstart && e.dragstart(...a), ["stop"])),
      onDragend: t[8] || (t[8] = O((...a) => e.dragend && e.dragend(...a), ["stop"])),
      onDragenter: t[9] || (t[9] = O((...a) => e.dragenter && e.dragenter(...a), ["prevent", "stop"])),
      onDragleave: t[10] || (t[10] = O((...a) => e.dragleave && e.dragleave(...a), ["prevent", "stop"])),
      onDragover: t[11] || (t[11] = O((...a) => e.dragover && e.dragover(...a), ["prevent", "stop"])),
      onDrop: t[12] || (t[12] = O((...a) => e.drop && e.drop(...a), ["prevent", "stop"]))
    }, [
      e.hideIcons ? U("", !0) : (I(), L("div", {
        key: 0,
        class: "icon-wrapper",
        onClick: t[0] || (t[0] = O((...a) => e.toggle && e.toggle(...a), ["stop"]))
      }, [
        be(c, {
          "is-leaf": e.isLeaf,
          opened: e.opened
        }, null, 8, ["is-leaf", "opened"])
      ])),
      e.hasCheckbox ? (I(), L("div", {
        key: 1,
        class: H(["checkbox-wrapper", e.checkedClass]),
        onClick: t[1] || (t[1] = O((...a) => e.clickCheckbox && e.clickCheckbox(...a), ["stop"]))
      }, [
        ae("input", {
          type: "checkbox",
          tabindex: "-1",
          class: "node-checkbox",
          checked: e.checked,
          disabled: e.disabled,
          ".indeterminate": e.indeterminate
        }, null, 8, dn)
      ], 2)) : U("", !0),
      $(e.$slots, "before-input", { node: n.node }),
      ae("div", cn, [
        e.editing ? Me((I(), L("input", {
          key: 0,
          type: "text",
          tabindex: "0",
          class: "node-input",
          "onUpdate:modelValue": t[2] || (t[2] = (a) => e.text = a),
          ref: l.setInputRef,
          disabled: e.disabled,
          onBlur: t[3] || (t[3] = (...a) => e.blur && e.blur(...a))
        }, null, 40, vn)), [
          [ze, e.text]
        ]) : (I(), L("span", {
          key: 1,
          class: "node-text",
          onDblclick: t[4] || (t[4] = (...a) => e.focusInput && e.focusInput(...a))
        }, Ve(e.text), 33))
      ]),
      $(e.$slots, "after-input", { node: n.node })
    ], 46, un),
    e.displayLoading ? $(e.$slots, "loading-slot", {
      key: 0,
      node: n.node
    }) : U("", !0),
    be(xe, { name: "level" }, {
      default: B(() => [
        e.displayLevel ? (I(), Y(u, {
          key: 0,
          "parent-id": e.id,
          depth: n.depth + 1,
          ref: l.setLevelRef
        }, {
          "loading-slot": B((a) => [
            $(e.$slots, "loading-slot", {
              node: a.node
            })
          ]),
          "before-input": B((a) => [
            $(e.$slots, "before-input", {
              node: a.node
            })
          ]),
          "after-input": B((a) => [
            $(e.$slots, "after-input", {
              node: a.node
            })
          ]),
          _: 3
        }, 8, ["parent-id", "depth"])) : U("", !0)
      ]),
      _: 3
    })
  ], 40, sn)) : U("", !0);
}
const pn = /* @__PURE__ */ Q(ln, [["render", fn]]), gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pn
}, Symbol.toStringTag, { value: "Module" }));
export {
  bn as default
};
