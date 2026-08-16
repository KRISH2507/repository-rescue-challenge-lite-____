# Repository Rescue Challenge (Lite)

## Background

You inherited this repository from a team with poor development practices.
The previous developers pushed directly to `main`, wrote throwaway commit
messages, left unfinished code lying around, and let an AI generate code
that nobody reviewed. On top of that, the environment configuration no
longer agrees with itself.

Your job is to **rescue this repository**.

## What's Wrong

This repository contains several known workflow and code issues. They are
**not** listed line-by-line on purpose — part of the exercise is learning
to investigate a messy codebase and figure out what needs attention.

At a high level, expect to run into things like:

- Unfinished placeholder code and TODOs.
- AI-generated code that was never reviewed or cleaned up.
- Environment configuration that drifted out of sync.
- A messy, meaningless commit history.
- A documented "workflow" that no real team should follow.

Investigate the repository and decide what needs fixing.

## Your Tasks

1. **Create a properly named feature branch** (do not work directly on `main`).
2. **Fix the TODOs and placeholder code** in the source files.
3. **Review and improve the AI-generated code.**
4. **Resolve the environment drift** so configuration is consistent.
5. **Commit your changes with meaningful commit messages.**
6. **Merge your feature branch back into `main`.**
7. **Capture screenshots as evidence** of your workflow (branching, commits, merge).

## Getting Started

```bash
# 1. Clone the repository
git clone <repo-url>
cd repository-rescue-challenge-lite

# 2. Look around first — read the code and the docs
git log --oneline
ls -R

# 3. Create your own feature branch (pick a good name)
git checkout -b feature/<your-branch-name>

# 4. Run the app to see it working before you change anything
node src/app.js

# 5. Make your fixes, then stage and commit with clear messages
git add <files>
git commit -m "meaningful message describing the change"

# 6. When done, merge back into main
git checkout main
git merge feature/<your-branch-name>

# 7. Push your work
git push origin main
```

## Repository Layout

```text
repository-rescue-challenge-lite/
├── README.md
├── .env.example
├── config/
│   └── environment.md
├── src/
│   ├── app.js
│   └── ai-generated.js
└── docs/
    └── workflow-notes.md
```

## Notes

- The application **runs as-is** — a broken repository does not mean broken
  execution. The problems are about hygiene, quality, and workflow.
- There is no answer key in this repository. The fixes are yours to make.

Good luck. Leave this repository better than you found it.

## Repository Workflow

Changes should be developed on feature branches and integrated through pull requests.

