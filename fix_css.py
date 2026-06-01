with open('app/globals.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False
for i, line in enumerate(lines):
    if "/* Rule 2 " in line:
        new_lines.append("/* Rule 2 — Nav height transition */\n")
        new_lines.append(".nav-inner {\n")
        new_lines.append("  transition: padding 200ms ease;\n")
        new_lines.append("}\n\n")
        new_lines.append("/* Rule 3 — Portfolio image filter transition */\n")
        new_lines.append(".portfolio-item {\n")
        new_lines.append("  transition: opacity 200ms ease, transform 200ms ease;\n")
        new_lines.append("}\n\n")
        new_lines.append("/* Rule 4 — Modern Hover Lift for Cards */\n")
        new_lines.append(".hover-card-lift {\n")
        new_lines.append("  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n")
        new_lines.append("}\n")
        new_lines.append(".hover-card-lift:hover {\n")
        new_lines.append("  transform: translateY(-4px);\n")
        new_lines.append("  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n")
        new_lines.append("}\n\n")
        new_lines.append("/* Rule 6 — Streaking Shimmer Effect */\n")
        new_lines.append("@keyframes streak {\n")
        new_lines.append("  0% { transform: translateX(-150%) skewX(-20deg); }\n")
        new_lines.append("  100% { transform: translateX(250%) skewX(-20deg); }\n")
        new_lines.append("}\n")
        new_lines.append(".animate-streak {\n")
        new_lines.append("  position: relative;\n")
        new_lines.append("  overflow: hidden;\n")
        new_lines.append("}\n")
        new_lines.append(".animate-streak::after {\n")
        new_lines.append("  content: '';\n")
        new_lines.append("  position: absolute;\n")
        new_lines.append("  top: 0;\n")
        new_lines.append("  left: 0;\n")
        new_lines.append("  width: 30%;\n")
        new_lines.append("  height: 100%;\n")
        new_lines.append("  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);\n")
        new_lines.append("  animation: streak 2.5s infinite linear;\n")
        new_lines.append("  pointer-events: none;\n")
        new_lines.append("}\n")
        skip = True
    elif "/* ===== PROBLEM SECTION ANIMATIONS ===== */" in line:
        skip = False
    
    if not skip:
        new_lines.append(line)

with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
