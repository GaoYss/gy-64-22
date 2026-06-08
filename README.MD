# Decoration Project Management System

FastAPI + React 装修公司项目管理系统，覆盖客户报备、量房预约、施工进度跟踪、材料采购和验收管理。

## 功能模块

- 客户报备：客户来源、户型、预算、状态和负责人管理
- 量房预约：预约时间、设计师、量房人员和需求记录
- 施工进度：项目阶段、进度百分比、风险等级和最新进展
- 材料采购：材料、供应商、数量、预算、到货状态管理
- 验收管理：验收类型、验收人、结果和整改问题记录
- 运营看板：客户、预约、项目、验收指标和阶段分布

## 项目结构

```text
.
├── backend
│   ├── app
│   │   ├── core          # 配置
│   │   ├── data          # 示例数据与内存仓库
│   │   ├── routers       # FastAPI 路由
│   │   ├── schemas       # Pydantic 模型
│   │   └── services      # 业务服务
│   ├── Dockerfile
│   └── requirements.txt
├── frontend
│   ├── src
│   │   ├── api           # API 客户端
│   │   ├── components    # 通用组件
│   │   ├── context       # 数据状态
│   │   ├── modules       # 导航和表单配置
│   │   └── pages         # 业务页面
│   ├── Dockerfile
│   ├── nginx.conf
│   └── vite.config.js
├── docker-compose.yml
└── README.MD
```

## Docker 启动

```bash
docker compose up --build
```

启动后访问：

- 前端：http://localhost:3000
- 后端健康检查：http://localhost:3000/api/health
- API 文档：http://localhost:3000/docs

## 本地开发

后端：

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

前端：

```bash
cd frontend
npm install
npm run dev
```

本地开发时访问 http://localhost:5173，Vite 会把 `/api` 请求代理到 http://127.0.0.1:8000。

## API 概览

- `GET /api/dashboard/summary`
- `GET|POST /api/customers`
- `PATCH /api/customers/{customer_id}`
- `GET|POST /api/appointments`
- `PATCH /api/appointments/{appointment_id}`
- `GET|POST /api/projects`
- `PATCH /api/projects/{project_id}`
- `GET|POST /api/procurements`
- `PATCH /api/procurements/{procurement_id}`
- `GET|POST /api/inspections`
- `PATCH /api/inspections/{inspection_id}`

当前版本使用内存数据仓库，便于演示和容器启动。生产落地时可在 `backend/app/services` 与 `backend/app/data` 下替换为数据库持久化实现。
