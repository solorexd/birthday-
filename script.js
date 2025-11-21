:root{
  --bg:#0b1020;
  --card:#ffffff;
  --accent:#ff6b6b;
  --muted:#c7c7c7;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: linear-gradient(180deg,#0b1020 0%, #111428 60%);
  color:#fff;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow:hidden;
}

.container{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  padding:30px;
}

.card{
  width:100%;
  max-width:760px;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
  border-radius:20px;
  padding:36px;
  box-shadow: 0 8px 40px rgba(2,6,23,0.7);
  text-align:center;
  backdrop-filter: blur(6px);
  position:relative;
  z-index:3;
}

h1{margin:0;font-size:28px;letter-spacing:0.6px}
.name{
  font-size:46px;
  margin:6px 0 18px 0;
  font-weight:700;
  color:var(--accent);
}

.cake-wrap{display:flex;justify-content:center;margin:8px 0 18px}
.cake{
  width:220px;height:120px;
  background: linear-gradient(180deg,#ffd9b9,#ffbfa0);
  border-radius:12px;
  position:relative;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35);
  display:flex;align-items:flex-start;justify-content:center;padding-top:20px;
}

.frosting{
  position:absolute;top:8px;width:90%;height:26px;border-radius:10px;background:#fff;
  left:5%;
  box-shadow: inset 0 -6px 12px rgba(0,0,0,0.06);
}

.candle{
  width:12px;height:48px;background:#fff;border-radius:6px;position:relative;z-index:2;
  display:flex;align-items:center;justify-content:center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}
.flame{
  position:absolute;top:-18px;width:14px;height:22px;border-radius:50% 50% 50% 50%/60% 60% 40% 40%;
  background: radial-gradient(closest-side, #ffd54a, #ff6b6b 60%);
  filter: drop-shadow(0 6px 8px rgba(255,100,100,0.12));
  transition: transform 260ms ease, opacity 260ms ease;
}

.controls{display:flex;gap:10px;justify-content:center;margin-top:16px}
.controls button{
  background:transparent;border:1px solid rgba(255,255,255,0.12);color:#fff;padding:10px 14px;border-radius:10px;
  cursor:pointer;font-weight:600;
}
.controls button:active{transform:translateY(1px)}

.hint{color:var(--muted);font-size:13px;margin-top:12px}

/* balloons */
#balloons{position:fixed;left:0;top:0;right:0;bottom:0;pointer-events:none;z-index:1}

/* confetti canvas */
#confetti{position:fixed;left:0;top:0;width:100%;height:100%;z-index:2;pointer-events:none}

/* responsive */
@media (max-width:520px){
  .name{font-size:34px}
  .cake{width:170px;height:96px}
  .container{padding:18px}
    }
