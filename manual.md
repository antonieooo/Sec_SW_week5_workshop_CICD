# CI/CD Lab Manual

This lab introduces you to how modern **continuous integration (CI)** pipelines work and how secure software engineering practices are built directly into those pipelines. You’ll work with a small, intentionally simple JavaScript project so you can focus on automation behavior rather than application complexity. Across the lab, you’ll create a GitHub Actions workflow, watch it run on every change, and progressively extend it with build steps, tests, matrix configurations, and security checks. Each stage shows how CI systems enforce quality and consistency before code is merged.

You’ll also explore the security side of CI/CD by adding dependency scanning, static analysis, and workflow‑hardening techniques such as least‑privilege permissions and action pinning. These additions help you understand how CI pipelines fit into the wider software supply chain and why they’re high‑value targets for attackers. The lab ends with a short threat‑model exercise where you identify risks in your own workflow and propose mitigations, reinforcing the idea that secure engineering is a continuous, integrated process rather than an afterthought.

> **Learning Outcome:**
>
> You’ll be able to design, implement, and secure a CI pipeline using GitHub Actions, understand how automation supports software quality, and apply practical security measures that protect both the codebase and the pipeline itself.

---

## Task 1: Core CI Tasks Using the Commented Workflow

This task focuses on understanding how GitHub Actions discovers and executes workflows, how jobs run, and how tests surface failures.

### Steps

1. **Enable workflow triggers** by uncommenting the `on:` block. Explore how pushes and pull requests automatically start a pipeline, and that CI is event-driven.
2. **Activate the first job** by uncommenting the `jobs:` block and the basic steps. This introduces the structure of jobs, runners, and steps.
3. **Run the initial failing test** by uncommenting checkout, setup, install, and test steps. Observe how CI surfaces test failures and how logs help diagnose issues.
4. **Introduce matrix builds** by uncommenting the matrix section. Observe parallel jobs, environment diversity, and how CI scales without duplicating YAML.

These tasks are aimed at helping you build a strong mental model of how pipelines behave and how GitHub Actions structures automation.

---

## Task 2: Secure Engineering Tasks Built Into the Workflow

Once the basic pipeline is running, begin to explore supply‑chain security and workflow hardening by progressively enabling the commented security sections.

1. **Enable dependency scanning** by uncommenting the npm audit step. You will learn how CI can detect vulnerable packages and enforce quality gates.
2. **Enable static analysis** by uncommenting the lint or CodeQL section. This introduces automated code‑quality and security checks.
3. **Apply workflow hardening** by uncommenting the `permissions:` block and action‑pinning examples. You will see how least‑privilege permissions and pinned actions reduce attack surface.
4. **Explore secrets handling** by uncommenting the mock deployment step and adding a GitHub encrypted secret. This reinforces safe credential management.

These tasks connect CI/CD to secure software engineering and supply‑chain risk.

---

## Task 3: Threat Modelling and Pipeline‑Hardening Tasks

The final tasks shift from implementation to analysis, helping you understand CI/CD as part of the broader security landscape.

1. **Identify risks** in the current workflow, such as unpinned actions, broad permissions, or unsafe triggers.
2. **Propose and implement mitigations** by modifying the workflow to reflect secure defaults.
3. **Complete the threat model** using the provided template, documenting assets, threat actors, attack scenarios, and defences.

This phase reinforces that CI/CD systems are high‑value targets and must be treated as part of the software supply chain.