# Rodobras Rebranding

Site de rebranding da Rodobras.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build estático (GitHub Pages)

```bash
npm run build
```

A saída estará em `out/` para publicação no GitHub Pages.

## Deploy no GitHub Pages

O workflow em `.github/workflows/deploy.yml` faz o build e o deploy automaticamente a cada push na branch `main`.

**Para ativar:**
1. No repositório, vá em **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Após o primeiro push (ou o próximo), o site ficará em:  
   **https://filipevolz.github.io/rodobras-rebranding/**
