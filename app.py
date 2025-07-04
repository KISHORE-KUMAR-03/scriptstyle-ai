import openai
import streamlit as st
import os
from dotenv import load_dotenv

# Optional: Load from .env if you use one
load_dotenv()

# Set your OpenAI API key directly or via environment variable
openai.api_key = os.getenv("OPENAI_API_KEY") or "your-api-key-here"

st.set_page_config(page_title="ScriptStyle AI", page_icon="🎬")
st.title("🎬 ScriptStyle AI – Dialogue Rewriter")
st.subheader("Rewriting dialogue while preserving the author's unique voice.")

# Input box
input_text = st.text_area("✏️ Enter your original dialogue here:", height=150)

# Optional tone selector
tone = st.selectbox("🎭 Choose tone (optional)", ["Default", "Minimalist", "Dramatic", "Humorous"])

# Function to get prompt
def create_prompt(dialogue, tone):
    tone_instruction = ""
    if tone != "Default":
        tone_instruction = f" Use a {tone.lower()} tone."
    return f"Rewrite the following dialogue while preserving the original author's voice.{tone_instruction}\n\nDialogue: \"{dialogue}\""

# On button click
if st.button("🔁 Rewrite Dialogue"):
    if input_text.strip() == "":
        st.warning("Please enter some dialogue to rewrite.")
    else:
        with st.spinner("Rewriting..."):
            try:
                prompt = create_prompt(input_text, tone)
                response = openai.ChatCompletion.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {"role": "system", "content": "You are a script editor who rewrites dialogue while preserving the author's voice."},
                        {"role": "user", "content": prompt}
                    ],
                    temperature=0.7,
                    max_tokens=200
                )
                rewritten = response.choices[0].message["content"].strip()
                st.success("✅ Rewritten Dialogue:")
                st.write(f"**{rewritten}**")
            except Exception as e:
                st.error(f"Error: {e}")
