import { Controller, Get } from '@nestjs/common';

@Controller('html')
export class HtmlController {
  @Get()
  onGet(): string {
    // return '<h1>Hola Gordo</h1>';
    return '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Diseño Elegante</title><style>body{margin:0;height:100vh;display:flex;justify-content:center;align-items:center;background:#050505;font-family:system-ui,-apple-system,sans-serif;overflow:hidden}.bg-orb{position:absolute;width:400px;height:400px;background:linear-gradient(45deg,#ff0080,#7928ca);border-radius:50%;filter:blur(80px);animation:move 15s infinite alternate;z-index:1}@keyframes move{from{transform:translate(-30%,-30%)}to{transform:translate(30%,30%)}}.card{position:relative;z-index:2;background:rgba(255,255,255,0.03);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:30px;padding:3rem;text-align:center;box-shadow:0 25px 50px rgba(0,0,0,0.5);color:white;max-width:350px;transition:0.4s ease}.card:hover{transform:translateY(-10px);border-color:rgba(255,255,255,0.2)}h1{font-size:2.8rem;margin:0 0 1rem;background:linear-gradient(to right,#fff,#aaa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-1px}p{line-height:1.6;opacity:0.7;margin-bottom:2.5rem;font-weight:300}button{background:#fff;color:#000;border:none;padding:14px 35px;border-radius:15px;font-weight:600;cursor:pointer;transition:0.3s;font-size:1rem}button:hover{background:#ff0080;color:#fff;box-shadow:0 0 20px rgba(255,0,128,0.4)}</style></head><body><div class="bg-orb"></div><div class="card"><h1>Minimalismo</h1><p>Diseño nativo creado con CSS moderno, utilizando desenfoque de fondo y gradientes animados.</p><button>Empezar</button></div></body></html>';
  }
}
